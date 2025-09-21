import { y as r } from "./manifests-Z5g9mgXG.js";
import { UmbControllerBase as p } from "@umbraco-cms/backoffice/class-api";
class n extends p {
  async map(e) {
    return {
      $type: e.$type,
      userPermissionType: r,
      documentType: {
        unique: e.documentType.id
      },
      propertyType: {
        unique: e.propertyType.id
      },
      verbs: e.verbs
    };
  }
}
export {
  n as UmbDocumentPropertyValueUserPermissionFromManagementApiDataMapping,
  n as api
};
//# sourceMappingURL=from-server.management-api.mapping-BYVPyprr.js.map
