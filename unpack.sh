#!/bin/sh
infile=${1?"Specify zip file"}
rm -Rf staging
mkdir staging
cd staging
unzip ../$infile
rm -Rf node_modules
