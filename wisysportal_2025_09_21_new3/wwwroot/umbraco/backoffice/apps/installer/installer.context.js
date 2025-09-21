import { InstallService, TelemetryLevelModel } from '@umbraco-cms/backoffice/external/backend-api';
import { tryExecute, UmbApiError } from '@umbraco-cms/backoffice/resources';
import { UmbContextToken } from '@umbraco-cms/backoffice/context-api';
import { UmbObjectState, UmbNumberState } from '@umbraco-cms/backoffice/observable-api';
import { UmbContextBase } from '@umbraco-cms/backoffice/class-api';
/**
 * Context API for the installer
 * @class UmbInstallerContext
 */
export class UmbInstallerContext extends UmbContextBase {
    constructor(host) {
        super(host, UMB_INSTALLER_CONTEXT);
        this._data = new UmbObjectState({
            user: { name: '', email: '', password: '', subscribeToNewsletter: false },
            database: { id: '', providerName: '', useIntegratedAuthentication: false, trustServerCertificate: false },
            telemetryLevel: TelemetryLevelModel.DETAILED,
        });
        this.data = this._data.asObservable();
        this._currentStep = new UmbNumberState(1);
        this.currentStep = this._currentStep.asObservable();
        this._settings = new UmbObjectState(undefined);
        this.settings = this._settings.asObservable();
        this._installStatus = new UmbObjectState(null);
        this.installStatus = this._installStatus.asObservable();
        this._loadInstallerSettings();
    }
    /**
     * Observable method to get the current step in the installation process
     * @public
     * @returns {*}  {Observable<number>}
     * @memberof UmbInstallerContext
     */
    currentStepChanges() {
        return this.currentStep;
    }
    /**
     * Observable method to get the install status in the installation process
     * @public
     * @returns {*}  {(Observable<UmbProblemDetails | null>)}
     * @memberof UmbInstallerContext
     */
    installStatusChanges() {
        return this.installStatus;
    }
    /**
     * Increment the current step in the installation process
     * @public
     * @memberof UmbInstallerContext
     */
    nextStep() {
        this._currentStep.setValue(this._currentStep.getValue() + 1);
    }
    /**
     * Decrements the current step in the installation process
     * @public
     * @memberof UmbInstallerContext
     */
    prevStep() {
        this._currentStep.setValue(this._currentStep.getValue() - 1);
    }
    /**
     * Reset the installation process
     * @public
     * @memberof UmbInstallerContext
     */
    reset() {
        this._installStatus.setValue(null);
        this._currentStep.setValue(1);
    }
    /**
     * Set the data for the installation process
     * @public
     * @param {Partial<InstallRequestModel>} data The data to set
     * @memberof UmbInstallerContext
     */
    appendData(data) {
        this._data.setValue({ ...this.getData(), ...data });
    }
    /**
     * Get the data for the installation process
     * @public
     * @returns {*}  {PostInstallRequest}
     * @memberof UmbInstallerContext
     */
    getData() {
        return this._data.getValue();
    }
    async postInstallSetup() {
        const { error } = await tryExecute(this, InstallService.postInstallSetup({ body: this.getData() }), {
            disableNotifications: true,
        });
        if (error) {
            if (UmbApiError.isUmbApiError(error))
                this.setInstallStatus(error.problemDetails);
            else
                this.setInstallStatus({ title: 'Unknown error', detail: error.message, status: 500, type: 'error' });
            return false;
        }
        // TODO: The post install will probably return a user in the future, so we have to set that context somewhere to let the client know that it is authenticated
        history.replaceState(null, '', 'section/content');
        return true;
    }
    /**
     * Set the install status
     * @public
     * @param {(UmbProblemDetails | null)} status The status to set
     * @memberof UmbInstallerContext
     */
    setInstallStatus(status) {
        this._installStatus.setValue(status);
    }
    /**
     * Load installer settings from the API
     * @private
     * @memberof UmbInstallerContext
     */
    async _loadInstallerSettings() {
        const { data, error } = await tryExecute(this, InstallService.getInstallSettings(), {
            disableNotifications: true,
        });
        if (data) {
            this._settings.setValue(data);
        }
        else if (UmbApiError.isUmbApiError(error)) {
            this._installStatus.setValue(error.problemDetails);
        }
    }
}
export const UMB_INSTALLER_CONTEXT = new UmbContextToken('UmbInstallerContext');
