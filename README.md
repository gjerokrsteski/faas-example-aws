# FaaS Example For AWS

This example code is no production code and should be used for training purposes only!

## Prerequisites
* AWS Account `https://aws.amazon.com`
* AWS CLI `https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-install.html`
* AWS SAM CLI `https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-cli-install.html`
* Install node and npm `https://www.npmjs.com/get-npm`   

## Start
* Create an s3 bucket
* Edit `./scripts/build-deploy.sh` and `./script/destroy.sh` and set the `AWS_REGION` and `aws_stage` and `aws_s3_bucket`   
* Run `npm i`
* Run `npm run cloud`
* Goto your aws account and api gateway to deploy your Prod api.
* Goto the url that the terminal exposed and test if it works

## Destroy
* Run `npm run cloud:destroy`  

