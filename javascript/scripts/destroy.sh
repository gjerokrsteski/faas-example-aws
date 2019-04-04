#!/usr/bin/env bash
set -e

aws cloudformation delete-stack --stack-name sac2019-java-${aws_stage}