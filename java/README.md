# Serverless Domain-Driven Design
## Prerequisite
* AWS Account `https://aws.amazon.com`
* AWS CLI `https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-install.html`
* AWS SAM CLI `https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-cli-install.html`
* Java 8
* install maven `https://www.baeldung.com/install-maven-on-windows-linux-mac` 

## to start
* Edit ./scripts/build-deploy.sh and ./script/destroy.sh and set the `AWS_REGION`  and `aws_stage` and `aws_s3_bucket`   
* Run `./scripts/build-deploy.sh`
* Goto your aws account and api gateway to deploy your Prod api.
* go to the url that the terminal exposed and test if it works

## to destroy
run `./scripts/destroy.sh`  

