import { UMB_CONTEXT_PROVIDE_EVENT_TYPE, UMB_CONTEXT_REQUEST_EVENT_TYPE, } from '@umbraco-cms/backoffice/context-api';
import { UmbControllerBase } from '@umbraco-cms/backoffice/class-api';
const CtrlAlias = Symbol();
/**
 * @internal
 * This controller creates a Proxy for the Context API.
 * @description It is not advised for anyone to implement this unless they know exactly what they are doing.
 */
export class UmbContextProxyController extends UmbControllerBase {
    #target;
    #getDestination;
    #ignorer = [];
    constructor(host, target, getDestination) {
        super(host, CtrlAlias);
        this.#target = target;
        this.#getDestination = getDestination;
        // Only handle something if there is a target. This could seem stupid, but since we support construction this controller despite a missing element, we enable the controller to destroy an already existing controller. aka replace it. [NL]
        if (target) {
            target.addEventListener(UMB_CONTEXT_REQUEST_EVENT_TYPE, this.#onContextRequest);
            target.addEventListener(UMB_CONTEXT_PROVIDE_EVENT_TYPE, this.#onContextProvide);
        }
    }
    /* We do not currently have a good enough control to ensure that the proxy is last, meaning if another context is provided at this element, it might respond after the proxy event has been dispatched.
    To avoid such you can declare context aliases to be ignorer by the proxy.
    */
    setIgnoreContextAliases(aliases) {
        this.#ignorer = aliases;
        return this;
    }
    #onContextRequest = (event) => {
        const destination = this.#getDestination();
        if (destination && !this.#ignorer.includes(event.contextAlias)) {
            event.stopImmediatePropagation();
            destination.dispatchEvent(event.clone());
        }
    };
    #onContextProvide = (event) => {
        const destination = this.#getDestination();
        if (destination) {
            event.stopPropagation();
            destination.dispatchEvent(event.clone());
        }
    };
    destroy() {
        super.destroy();
        if (this.#target) {
            this.#target.removeEventListener(UMB_CONTEXT_REQUEST_EVENT_TYPE, this.#onContextRequest);
            this.#target.removeEventListener(UMB_CONTEXT_PROVIDE_EVENT_TYPE, this.#onContextProvide);
        }
    }
}
