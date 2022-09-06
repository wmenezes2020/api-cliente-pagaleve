#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@aws-cdk/core");
const cdk_stack_1 = require("../lib/cdk-stack");
const permissions_boundary_aspect_1 = require("../lib/permissions-boundary-aspect");
const stack = new cdk_stack_1.CdkStack(new core_1.App(), 'CdkStack', { description: 'Start from scratch starter project' });
const { ACCOUNT_ID, PARTITION, REGION, STACK_NAME } = core_1.Aws;
const permissionBoundaryArn = `arn:${PARTITION}:iam::${ACCOUNT_ID}:policy/${STACK_NAME}-${REGION}-PermissionsBoundary`;
stack.node.applyAspect(new permissions_boundary_aspect_1.PermissionsBoundaryAspect(permissionBoundaryArn));
//# sourceMappingURL=cdk.js.map