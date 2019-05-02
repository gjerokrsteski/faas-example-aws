#!/usr/bin/env sh
set -e
npm set progress=false
npm update
npm audit fix --only=prod --registry=https://registry.npmjs.org
