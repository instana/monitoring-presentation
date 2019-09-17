#!/usr/bin/env bash

set -eo pipefail

cd backend
docker build -t twoot-backend .
docker run --detach --net=host twoot-backend
