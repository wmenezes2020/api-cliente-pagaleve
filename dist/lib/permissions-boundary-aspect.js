"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PermissionsBoundaryAspect = void 0;
const iam = require("@aws-cdk/aws-iam");
class PermissionsBoundaryAspect {
    constructor(permissionBoundaryArn) {
        this.arn = permissionBoundaryArn;
    }
    visit(node) {
        if (node instanceof iam.Role) {
            const roleResource = node.node.findChild('Resource');
            roleResource.addPropertyOverride('PermissionsBoundary', this.arn);
        }
    }
}
exports.PermissionsBoundaryAspect = PermissionsBoundaryAspect;
//# sourceMappingURL=permissions-boundary-aspect.js.map