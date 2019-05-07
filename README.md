# FaaS Example For AWS [![Build Status](https://travis-ci.org/gjerokrsteski/faas-example-aws.svg?branch=master)](https://travis-ci.org/gjerokrsteski/faas-example-aws)

This example code is no production code and should be used for training purposes only!

## Prerequisites
* AWS Account `https://aws.amazon.com`
* AWS CLI `https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-install.html`
* AWS SAM CLI `https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-cli-install.html`
* Install node and npm `https://www.npmjs.com/get-npm`   

## Start
1. Create an s3 bucket
1. Edit `./scripts/build-deploy.sh` and `./script/destroy.sh` and set the `AWS_REGION` and `aws_stage` and `aws_s3_bucket`   
1. Run `npm i`
1. Run `npm run cloud`
1. Goto your aws account and api gateway to deploy your production api.
1. Goto the url that the terminal exposed and test if it works

## Destroy
1. Run `npm run cloud:destroy`  
