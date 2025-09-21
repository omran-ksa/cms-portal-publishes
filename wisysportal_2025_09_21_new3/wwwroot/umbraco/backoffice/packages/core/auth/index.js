import { css as y, property as d, customElement as R, nothing as S, html as k } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as A } from "@umbraco-cms/backoffice/lit-element";
import { UmbTextStyles as z } from "@umbraco-cms/backoffice/style";
import { FetchRequestor as E, AuthorizationServiceConfiguration as O, AuthorizationNotifier as U, BaseTokenRequestHandler as P, LocalStorageBackend as q, RedirectRequestHandler as L, TokenResponse as $, AuthorizationRequest as g, RevokeTokenRequest as b, TokenRequest as w, GRANT_TYPE_AUTHORIZATION_CODE as x, GRANT_TYPE_REFRESH_TOKEN as N, BasicQueryStringUtils as C } from "@umbraco-cms/backoffice/external/openid";
import { Subject as v, ReplaySubject as I, distinctUntilChanged as F, auditTime as B, throttleTime as W, firstValueFrom as H, switchMap as V } from "@umbraco-cms/backoffice/external/rxjs";
import { U as M } from "../auth.context.token-CFi72pnR.js";
import { UmbContextBase as D } from "@umbraco-cms/backoffice/class-api";
import { UmbBooleanState as J } from "@umbraco-cms/backoffice/observable-api";
import { umbHttpClient as K } from "@umbraco-cms/backoffice/http-client";
import { U as j } from "../modal-token-wEQqBBXI.js";
var G = Object.defineProperty, Y = Object.getOwnPropertyDescriptor, T = (n) => {
  throw TypeError(n);
}, l = (n, t, e, i) => {
  for (var s = i > 1 ? void 0 : i ? Y(t, e) : t, o = n.length - 1, r; o >= 0; o--)
    (r = n[o]) && (s = (i ? r(t, e, s) : r(s)) || s);
  return i && s && G(t, e, s), s;
}, Q = (n, t, e) => t.has(n) || T("Cannot " + e), _ = (n, t, e) => (Q(n, t, "read from private field"), e ? e.call(n) : t.get(n)), X = (n, t, e) => t.has(n) ? T("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(n) : t.set(n, e), u, m;
let a = class extends A {
  constructor() {
    super(...arguments), X(this, u);
  }
  connectedCallback() {
    super.connectedCallback(), this.setAttribute("part", "auth-provider-default");
  }
  render() {
    return k`
			<uui-button
				type="button"
				@click=${() => this.onSubmit(this.manifest)}
				id="auth-provider-button"
				.label=${_(this, u, m)}
				.look=${this.manifest.meta?.defaultView?.look ?? "outline"}
				.color=${this.manifest.meta?.defaultView?.color ?? "default"}>
				${this.manifest.meta?.defaultView?.icon ? k`<uui-icon id="icon" .name=${this.manifest.meta?.defaultView?.icon}></uui-icon>` : S}
				${_(this, u, m)}
			</uui-button>
		`;
  }
};
u = /* @__PURE__ */ new WeakSet();
m = function() {
  const n = this.manifest.meta?.label ?? this.manifest.forProviderName, t = this.localize.string(n);
  return this.localize.term("login_signInWith", t);
};
a.styles = [
  z,
  y`
			:host {
				display: block;
			}

			#auth-provider-button {
				width: 100%;
			}

			#icon {
				margin-right: var(--uui-size-space-1);
			}
		`
];
l([
  d({ attribute: !1 })
], a.prototype, "userLoginState", 2);
l([
  d({ attribute: !1 })
], a.prototype, "manifest", 2);
l([
  d({ attribute: !1 })
], a.prototype, "onSubmit", 2);
a = l([
  R("umb-auth-provider-default")
], a);
const c = "umb:userAuthTokenResponse", Z = new E();
class tt extends C {
  parse(t) {
    return super.parse(t, !1);
  }
}
class et {
  constructor(t, e, i, s = "umbraco-back-office", o = "offline_access") {
    this.authorizationSignal = new v(), this.#s = e, this.#e = i, this.#i = s, this.#u = o, this.#a = new O({
      authorization_endpoint: `${t}/umbraco/management/api/v1/security/back-office/authorize`,
      token_endpoint: `${t}/umbraco/management/api/v1/security/back-office/token`,
      revocation_endpoint: `${t}/umbraco/management/api/v1/security/back-office/revoke`,
      end_session_endpoint: `${t}/umbraco/management/api/v1/security/back-office/signout`
    }), this.#c = `${t}/umbraco/management/api/v1/security/back-office/link-login`, this.#l = `${t}/umbraco/management/api/v1/security/back-office/link-login-key`, this.#p = `${t}/umbraco/management/api/v1/security/back-office/unlink-login`, this.#n = new U(), this.#o = new P(Z), this.#r = new q(), this.#h = new L(this.#r, new tt()), this.#h.setAuthorizationNotifier(this.#n), this.#n.setAuthorizationListener(async (r, h, p) => {
      if (p)
        throw console.error("Authorization error", p), this.authorizationSignal.next(), p;
      if (h) {
        let f;
        r.internal && r.internal.code_verifier && (f = r.internal.code_verifier), await this.#f(h.code, f), await this.performWithFreshTokens(), await this.#m();
      }
      this.authorizationSignal.next();
    });
  }
  // handlers
  #n;
  #h;
  #o;
  #r;
  // state
  #a;
  #s;
  #e;
  #i;
  #u;
  // tokens
  #t;
  // external login
  #c;
  #l;
  #p;
  /**
   * This method will initialize all the state needed for the auth flow.
   *
   * It will:
   * - Check if there is a token response in local storage
   * - If there is a token response, check if it is valid
   * - If it is not valid, check if there is a new authorization to be made
   * - If there is a new authorization to be made, complete it
   * - If there is no token response, check if there is a new authorization to be made
   * - If there is a new authorization to be made, complete it
   */
  async setInitialState() {
    const t = await this.#r.getItem(c);
    if (t) {
      const e = new $(JSON.parse(t));
      this.#t = e;
    }
  }
  /**
   * This method will check if there is a new authorization to be made and complete it if there is.
   * This method will be called on initialization to check if there is a new authorization to be made.
   * It is useful if there is a ?code query string parameter in the URL from the server or if the auth flow
   * saved the state in local storage before redirecting the user to the login page.
   */
  completeAuthorizationIfPossible() {
    return this.#h.completeAuthorizationRequestIfPossible();
  }
  /**
   * Make an authorization request to the server using the specified identity provider.
   * This method will redirect the user to the authorization endpoint of the server.
   * @param identityProvider The identity provider to use for the authorization request.
   * @param usernameHint (Optional) The username to use for the authorization request. It will be provided to the OpenID server as a hint.
   */
  makeAuthorizationRequest(t, e) {
    const i = { prompt: "consent", access_type: "offline" };
    t !== "Umbraco" && (i.identity_provider = t), e && (i.login_hint = e);
    const s = new g(
      {
        client_id: this.#i,
        redirect_uri: this.#s,
        scope: this.#u,
        response_type: g.RESPONSE_TYPE_CODE,
        state: void 0,
        extras: i
      },
      void 0,
      !0
    );
    return this.#h.performAuthorizationRequest(this.#a, s);
  }
  /**
   * This method will check if the user is logged in by validating if there is a token stored.
   * If no token is stored, it will return false.
   * @returns true if the user is logged in, false otherwise.
   */
  isAuthorized() {
    return !!this.#t;
  }
  /**
   * Forget all cached token state
   */
  async clearTokenStorage() {
    await this.#r.removeItem(c), this.#t = void 0;
  }
  /**
   * This method will sign the user out of the application.
   */
  async signOut() {
    const t = [];
    if (this.#t) {
      const o = new b({
        token: this.#t.accessToken,
        client_id: this.#i,
        token_type_hint: "access_token"
      });
      if (t.push(this.#o.performRevokeTokenRequest(this.#a, o)), this.#t.refreshToken) {
        const r = new b({
          token: this.#t.refreshToken,
          client_id: this.#i,
          token_type_hint: "refresh_token"
        });
        t.push(
          this.#o.performRevokeTokenRequest(this.#a, r)
        );
      }
    }
    t.push(this.clearTokenStorage()), await Promise.allSettled(t);
    const e = new URL(this.#e, window.origin), i = this.#a.endSessionEndpoint;
    if (!i) {
      location.href = e.href;
      return;
    }
    const s = new URL(i, this.#s);
    s.searchParams.set("post_logout_redirect_uri", e.href), location.href = s.href;
  }
  /**
   * This method will check if the token needs to be refreshed and if so, it will refresh it and return the new access token.
   * If the token does not need to be refreshed, it will return the current access token.
   * @returns {Promise<string>} The access token for the user.
   */
  async performWithFreshTokens() {
    if (this.#t?.isValid())
      return Promise.resolve(this.#t.accessToken);
    const t = await this.makeRefreshTokenRequest(), e = this.#t?.accessToken ?? "";
    return t || this.clearTokenStorage(), Promise.resolve(e);
  }
  /**
   * This method will link the current user to the specified provider by redirecting the user to the link endpoint.
   * @param provider The provider to link to.
   */
  async linkLogin(t) {
    const e = await this.#k(t), i = document.createElement("form");
    i.method = "POST", i.action = this.#c, i.style.display = "none";
    const s = document.createElement("input");
    s.name = "provider", s.value = t, i.appendChild(s);
    const o = document.createElement("input");
    o.name = "linkKey", o.value = e, i.appendChild(o), document.body.appendChild(i), i.submit();
  }
  /**
   * This method will unlink the current user from the specified provider.
   * @param loginProvider
   * @param providerKey
   */
  async unlinkLogin(t, e) {
    const i = await this.performWithFreshTokens(), s = new Request(this.#p, {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${i}` },
      body: JSON.stringify({ loginProvider: t, providerKey: e })
    }), o = await fetch(s);
    if (!o.ok)
      throw await o.json();
    return await this.signOut(), !0;
  }
  /**
   * Save the current token response to local storage.
   */
  async #m() {
    this.#t && await this.#r.setItem(c, JSON.stringify(this.#t.toJson()));
  }
  /**
   * This method will make a token request to the server using the authorization code.
   * @param code
   * @param codeVerifier
   */
  async #f(t, e) {
    const i = {};
    e && (i.code_verifier = e);
    const s = new w({
      client_id: this.#i,
      redirect_uri: this.#s,
      grant_type: x,
      code: t,
      refresh_token: void 0,
      extras: i
    });
    await this.#d(s);
  }
  async makeRefreshTokenRequest() {
    if (!this.#t?.refreshToken)
      return !1;
    const t = new w({
      client_id: this.#i,
      redirect_uri: this.#s,
      grant_type: N,
      code: void 0,
      refresh_token: this.#t.refreshToken,
      extras: void 0
    });
    return this.#d(t);
  }
  /**
   * This method will make a token request to the server using the refresh token.
   * If the request fails, it will sign the user out (clear the token state).
   * @param request
   */
  async #d(t) {
    try {
      return this.#t = await this.#o.performTokenRequest(this.#a, t), this.#m(), !0;
    } catch (e) {
      return console.error("Token request error", e), this.clearTokenStorage(), !1;
    }
  }
  async #k(t) {
    const e = await this.performWithFreshTokens(), i = await fetch(`${this.#l}?provider=${t}`, {
      headers: {
        Authorization: `Bearer ${e}`,
        "Content-Type": "application/json"
      }
    });
    if (!i.ok)
      throw new Error("Failed to link login");
    return i.json();
  }
}
class pt extends D {
  constructor(t, e, i, s) {
    super(t, M), this.#n = new J(!1), this.#h = new v(), this.#o = new I(1), this.isInitialized = this.#o.asObservable(), this.isAuthorized = this.#n.asObservable().pipe(F()), this.timeoutSignal = this.#h.asObservable().pipe(
      // Audit the timeout signal to ensure that it waits for 1s before allowing another emission, which prevents rapid firing of the signal.
      // This is useful to prevent the UI from being flooded with timeout events.
      B(1e3)
    ), this.#r = s, this.#a = e, this.#s = i, this.#e = new et(e, this.getRedirectUrl(), this.getPostLogoutRedirectUrl()), this.observe(
      this.authorizationSignal,
      () => {
        this.getIsAuthorized();
      },
      "_authFlowAuthorizationSignal"
    ), window.addEventListener("storage", this.#t.bind(this));
  }
  #n;
  #h;
  #o;
  #r;
  #a;
  #s;
  #e;
  #i;
  #u;
  /**
   * Observable that acts as a signal for when the authorization state changes.
   * @remark It will emit once per second, so it can be used to trigger UI updates or other actions when the authorization state changes.
   * @returns {Subject<void>} An observable that emits when the authorization state changes.
   */
  get authorizationSignal() {
    return this.#e.authorizationSignal.asObservable().pipe(
      // Throttle the signal to ensure that it emits once, then waits for 1s before allowing another emission.
      W(1e3)
    );
  }
  destroy() {
    super.destroy(), window.removeEventListener("storage", this.#t.bind(this));
  }
  async #t(t) {
    t.key === c && (this.#i?.close(), await this.setInitialState(), this.#e.authorizationSignal.next());
  }
  /**
   * Initiates the login flow.
   * @param identityProvider The provider to use for login. Default is 'Umbraco'.
   * @param redirect If true, the user will be redirected to the login page.
   * @param usernameHint The username hint to use for login.
   * @param manifest The manifest for the registered provider.
   */
  async makeAuthorizationRequest(t = "Umbraco", e, i, s) {
    const o = await this.#e.makeAuthorizationRequest(t, i);
    if (e) {
      location.href = o;
      return;
    }
    const r = s?.meta?.behavior?.popupTarget ?? "umbracoAuthPopup", h = s?.meta?.behavior?.popupFeatures ?? "width=600,height=600,menubar=no,location=no,resizable=yes,scrollbars=yes,status=no,toolbar=no";
    return !this.#i || this.#i.closed ? this.#i = window.open(o, r, h) : this.#u !== o && (this.#i = window.open(o, r), this.#i?.focus()), this.#u = o, H(this.authorizationSignal);
  }
  /**
   * Completes the login flow.
   */
  completeAuthorizationRequest() {
    return this.#e.completeAuthorizationIfPossible();
  }
  /**
   * Checks if the user is authorized. If Authorization is bypassed, the user is always authorized.
   * @returns True if the user is authorized, otherwise false.
   */
  getIsAuthorized() {
    if (this.#r)
      return this.#n.setValue(!0), !0;
    {
      const t = this.#e.isAuthorized();
      return this.#n.setValue(t), t;
    }
  }
  /**
   * Sets the initial state of the auth flow.
   * @returns {Promise<void>}
   */
  setInitialState() {
    return this.#e.setInitialState();
  }
  /**
   * Gets the latest token from the Management API.
   * If the token is expired, it will be refreshed.
   *
   * NB! The user may experience being redirected to the login screen if the token is expired.
   * @example <caption>Using the latest token</caption>
   * ```js
   *   const token = await authContext.getLatestToken();
   *   const result = await fetch('https://my-api.com', { headers: { Authorization: `Bearer ${token}` } });
   * ```
   * @memberof UmbAuthContext
   * @returns The latest token from the Management API
   */
  getLatestToken() {
    return this.#e.performWithFreshTokens();
  }
  /**
   * Validates the token against the server and returns true if the token is valid.
   * @memberof UmbAuthContext
   * @returns True if the token is valid, otherwise false
   */
  async validateToken() {
    return this.#r || this.#e.makeRefreshTokenRequest();
  }
  /**
   * Clears the token storage.
   * @memberof UmbAuthContext
   */
  clearTokenStorage() {
    return this.#e.clearTokenStorage();
  }
  /**
   * Handles the case where the user has timed out, i.e. the token has expired.
   * This will clear the token storage and set the user as unauthorized.
   * @memberof UmbAuthContext
   */
  timeOut() {
    this.#n.setValue(!1), this.#h.next();
  }
  /**
   * Signs the user out by removing any tokens from the browser.
   * @memberof UmbAuthContext
   */
  signOut() {
    return this.#e.signOut();
  }
  /**
   * Get the server url to the Management API.
   * @memberof UmbAuthContext
   * @example <caption>Using the server url</caption>
   * ```js
   * 	const serverUrl = authContext.getServerUrl();
   * 	OpenAPI.BASE = serverUrl;
   * ```
   * @example <caption></caption>
   * ```js
   * 	const serverUrl = authContext.getServerUrl();
   * 	const token = await authContext.getLatestToken();
   * 	const result = await fetch(`${serverUrl}/umbraco/management/api/v1/my-resource`, { headers: { Authorization: `Bearer ${token}` } });
   * ```
   * @returns The server url to the Management API
   */
  getServerUrl() {
    return this.#a;
  }
  /**
   * Get the default OpenAPI configuration, which is set up to communicate with the Management API.
   * @remark This is useful if you want to communicate with your own resources generated by the [@hey-api/openapi-ts](https://github.com/hey-api/openapi-ts) library.
   * @memberof UmbAuthContext
   * @example <caption>Using the default OpenAPI configuration</caption>
   * ```js
   * const defaultOpenApi = authContext.getOpenApiConfiguration();
   * client.setConfig({
   *   base: defaultOpenApi.base,
   *   auth: defaultOpenApi.token,
   * });
   * ```
   * @returns {UmbOpenApiConfiguration} The default OpenAPI configuration
   */
  getOpenApiConfiguration() {
    const t = K.getConfig();
    return {
      base: t.baseUrl,
      credentials: t.credentials,
      token: () => this.getLatestToken()
    };
  }
  /**
   * Sets the auth context as initialized, which means that the auth context is ready to be used.
   * @remark This is used to let the app context know that the core module is ready, which means that the core auth providers are available.
   */
  setInitialized() {
    this.#o.next(), this.#o.complete();
  }
  /**
   * Gets all registered auth providers.
   * @param extensionsRegistry
   */
  getAuthProviders(t) {
    return this.#o.pipe(
      V(() => t.byType("authProvider"))
    );
  }
  /**
   * Gets the authorized redirect url.
   * @returns The redirect url, which is the backoffice path.
   */
  getRedirectUrl() {
    return `${window.location.origin}${this.#s}${this.#s.endsWith("/") ? "" : "/"}oauth_complete`;
  }
  /**
   * Gets the post logout redirect url.
   * @returns The post logout redirect url, which is the backoffice path with the logout path appended.
   */
  getPostLogoutRedirectUrl() {
    return `${window.location.origin}${this.#s}${this.#s.endsWith("/") ? "" : "/"}logout`;
  }
  /**
   * @param provider
   * @see UmbAuthFlow#linkLogin
   */
  linkLogin(t) {
    return this.#e.linkLogin(t);
  }
  /**
   * @param providerName
   * @param providerKey
   * @see UmbAuthFlow#unlinkLogin
   */
  unlinkLogin(t, e) {
    return this.#e.unlinkLogin(t, e);
  }
}
const mt = new j("Umb.Modal.AppAuth", {
  modal: {
    type: "dialog"
  }
});
export {
  M as UMB_AUTH_CONTEXT,
  mt as UMB_MODAL_APP_AUTH,
  c as UMB_STORAGE_TOKEN_RESPONSE_NAME,
  pt as UmbAuthContext,
  a as UmbAuthProviderDefaultElement
};
//# sourceMappingURL=index.js.map
