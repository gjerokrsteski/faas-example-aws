#!/usr/bin/env bash
set -e -u

export AWS_REGION="eu-west-1"
export aws_stage="gjero-local"
export aws_s3_bucket="nodejs-faas-exsample"

npm run build

aws cloudformation package --region ${AWS_REGION} --template-file template.yaml --s3-bucket ${aws_s3_bucket} --s3-prefix ${aws_stage} --output-template-file packaged.yaml
aws cloudformation deploy --region ${AWS_REGION} --template-file ./packaged.yaml --stack-name node-js-faas-${aws_stage} --parameter-overrides Stage=${aws_stage} --capabilities CAPABILITY_IAM

echo $(aws cloudformation describe-stacks --stack-name node-js-faas-$aws_stage --query 'Stacks[0].Outputs[?OutputKey==`ParkingGarageApi`].OutputValue' --output text)
