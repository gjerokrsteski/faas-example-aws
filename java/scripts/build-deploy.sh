#!/usr/bin/env bash
set -e -u

export AWS_REGION="eu-west-1"
export aws_stage="kb-local"
export aws_s3_bucket="baasie.cf.sac2019"


mvn clean package

aws cloudformation package --region eu-west-1 --template-file template.yaml --s3-bucket ${aws_s3_bucket} --s3-prefix ${aws_stage} --output-template-file packaged.yaml
aws cloudformation deploy --region eu-west-1 --template-file ./packaged.yaml --stack-name sac2019-java-${aws_stage} --parameter-overrides Stage=${aws_stage} --capabilities CAPABILITY_IAM

echo API_URL = $(aws cloudformation describe-stacks --stack-name sac2019-java-$aws_stage --query 'Stacks[0].Outputs[?OutputKey==`ParkingGarageApi`].OutputValue' --output text)