#!/usr/bin/env bash
set -e

export AWS_REGION="eu-west-1"
export aws_stage="kb-local"

aws cloudformation delete-stack --stack-name sac2019-java-${aws_stage}