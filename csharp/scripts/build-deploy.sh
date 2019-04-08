#!/usr/bin/env bash
set -e -u

export AWS_REGION="eu-west-1"
export aws_stage="kb-local"
export aws_s3_bucket="baasie.cf.sac2019"

dotnet build
dotnet test

rm -rf artifacts
dotnet publish src/Lambda/Lambda.csproj -o ../../artifacts/Lambda

cd ./artifacts/Lambda
zip -r -X ServerlessDDD-1.0.0.zip ./

cd ..
cd ..
mv ./artifacts/Lambda/ServerlessDDD-1.0.0.zip ./artifacts/

aws cloudformation package --region ${AWS_REGION} --template-file template.yaml --s3-bucket ${aws_s3_bucket} --s3-prefix ${aws_stage} --output-template-file packaged.yaml
aws cloudformation deploy --region ${AWS_REGION} --template-file ./packaged.yaml --stack-name sac2019-csharp-${aws_stage} --parameter-overrides Stage=${aws_stage} --capabilities CAPABILITY_IAM

echo API_URL = $(aws cloudformation describe-stacks --stack-name sac2019-csharp-$aws_stage --query 'Stacks[0].Outputs[?OutputKey==`ParkingGarageApi`].OutputValue' --output text)