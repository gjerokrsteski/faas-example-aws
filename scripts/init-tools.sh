#!/usr/bin/env bash
set -eo pipefail

sudo pip install setuptools
sudo pip install wheel
sudo pip install awscli --upgrade

pip install --user aws-sam-cli
USER_BASE_PATH=$(python -m site --user-base)
export PATH=$PATH:$USER_BASE_PATH/bin
