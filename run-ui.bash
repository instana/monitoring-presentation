#!/usr/bin/env bash

set -eo pipefail

cd ui
docker build -t twoot-ui .
docker run --detach --publish 3000:3000 twoot-ui
