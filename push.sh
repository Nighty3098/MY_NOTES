#!/bin/bash

current_date=$(date +"%Y-%m-%d %H:%M:%S")
device_name=$(hostname)

echo -e "Starting ..."

git add .
git commit -m "${current_date} PUSH BY ${device_name}"
git push

echo -e "DONE"
