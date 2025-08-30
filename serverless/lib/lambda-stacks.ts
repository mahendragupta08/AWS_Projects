import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as lambda from 'aws-cdk-lib/aws-lambda'

export class LambdaStack extends cdk.Stack {
    public readonly myLambda: lambda.Function;

    constructor(scope: Construct, id: string, props?: cdk.StackProps) {
        super(scope,id,props);

        this.myLambda = new lambda.Function(this, 'MyPythonLambda',{
            runtime: lambda.Runtime.PYTHON_3_9,
            handler: 'app.lambda_handler',
            code: lambda.Code.fromAsset('lambda'),
        });
    }
}