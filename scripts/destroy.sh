#!/usr/bin/env bash
set -e

export AWS_REGION="eu-west-1"
export aws_stage="gjero-local"

aws cloudformation delete-stack --stack-name node-js-faas-${aws_stage}
