# Serverless Domain-Driven Design
## Prerequisite
* AWS Account `https://aws.amazon.com`
* AWS CLI `https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-install.html`
* AWS SAM CLI `https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-cli-install.html`
* install node and npm `https://www.npmjs.com/get-npm`   

## to start
* Edit ./scripts/build-deploy.sh and set the `AWS_REGION`  and `AWS_STAGE`   
* Run `npm i`  
* Run `npm run cloud`
* Goto your aws account and api gateway to deploy your Prod api.
* go to the url that the terminal exposed and test if it works

## to destroy
run `npm run cloud:destroy`  

