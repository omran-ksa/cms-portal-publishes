import { UmbInstallerContext } from '../installer.context.js';
import { html } from '@umbraco-cms/backoffice/external/lit';
export const installerContextProvider = (story, createContextMethod = (host) => {
    return new UmbInstallerContext(host);
}) => html `
	<umb-controller-host-provider
		style="display: block;margin: 2rem 25%;padding: 1rem;border: 1px solid #ddd;"
		.create=${createContextMethod}>
		${story()}
	</umb-controller-host-provider>
`;
