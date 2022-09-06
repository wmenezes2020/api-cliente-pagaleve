"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CdkStack = void 0;
const lambda = require("@aws-cdk/aws-lambda");
const s3 = require("@aws-cdk/aws-s3");
const core_1 = require("@aws-cdk/core");
class CdkStack extends core_1.Stack {
    constructor(scope, id, props) {
        super(scope, id, props);
        new core_1.CfnParameter(this, 'AppId');
        const artifactBucket = process.env.S3_BUCKET;
        const artifactKey = `${process.env.CODEBUILD_BUILD_ID}/function-code.zip`;
        new lambda.Function(this, 'helloFromLambda', {
            description: 'A Lambda function that returns a string.',
            handler: 'src/handlers/hello-from-lambda.helloFromLambdaHandler',
            runtime: lambda.Runtime.NODEJS_16_X,
            code: lambda.Code.fromBucket(s3.Bucket.fromBucketName(this, 'ArtifactBucket', artifactBucket), artifactKey),
        });
    }
}
exports.CdkStack = CdkStack;
//# sourceMappingURL=cdk-stack.js.map