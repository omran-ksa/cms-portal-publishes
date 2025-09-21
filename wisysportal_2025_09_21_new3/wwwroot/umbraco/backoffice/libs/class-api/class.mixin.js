import { UmbControllerHostMixin, } from '@umbraco-cms/backoffice/controller-api';
import { UmbContextConsumerController, UmbContextProviderController, } from '@umbraco-cms/backoffice/context-api';
import { UmbObserverController, simpleHashCode } from '@umbraco-cms/backoffice/observable-api';
export const UmbClassMixin = (superClass) => {
    class UmbClassMixinClass extends UmbControllerHostMixin(superClass) {
        constructor(host, controllerAlias) {
            super();
            this._host = host;
            this._controllerAlias = controllerAlias ?? Symbol(); // This will fallback to a Symbol, ensuring that this class is only appended to the controller host once.
            this._host.addUmbController(this);
        }
        getHostElement() {
            return this._host?.getHostElement();
        }
        get controllerAlias() {
            return this._controllerAlias;
        }
        observe(
        // This type dance checks if the Observable given could be undefined, if it potentially could be undefined it means that this potentially could return undefined and then call the callback with undefined. [NL]
        source, callback, controllerAlias) {
            // Fallback to use a hash of the provided method, but only if the alias is undefined and there is a callback.
            if (controllerAlias === undefined && callback) {
                controllerAlias = simpleHashCode(callback.toString());
            }
            else if (controllerAlias === null) {
                // if value is null, then reset it to undefined. Null is used to explicitly tell that we do not want a controller alias. [NL]
                controllerAlias = undefined;
            }
            if (source) {
                return new UmbObserverController(this, source, callback, controllerAlias);
            }
            else {
                callback?.(undefined);
                this.removeUmbControllerByAlias(controllerAlias);
                return undefined;
            }
        }
        provideContext(contextAlias, instance) {
            return new UmbContextProviderController(this, contextAlias, instance);
        }
        consumeContext(contextAlias, callback) {
            return new UmbContextConsumerController(this, contextAlias, callback);
        }
        async getContext(contextAlias, options) {
            const controller = new UmbContextConsumerController(this, contextAlias);
            if (options) {
                if (options.passContextAliasMatches) {
                    controller.passContextAliasMatches();
                }
                if (options.skipHost) {
                    controller.skipHost();
                }
            }
            return controller.asPromise(options);
        }
        destroy() {
            if (this._host) {
                this._host.removeUmbController(this);
            }
            super.destroy();
            if (this._host) {
                this._host = undefined;
            }
        }
    }
    return UmbClassMixinClass;
};
