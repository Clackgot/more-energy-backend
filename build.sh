#!/bin/bash

export HTTP_PORT=$1 
export JWT_EXPIRES=$2 
export JWT_KEY=$3 
export POSTGRES_DATABASE=$4 
export POSTGRES_PASSWORD=$5 
export POSTGRES_PORT=$6 
export POSTGRES_USERNAME=$7

rm -rf more-energy-backend/ && git clone git@github.com:Clackgot/more-energy-backend.git
cd more-energy-backend
docker compose build --no-cache
docker compose up --force-recreate -d
