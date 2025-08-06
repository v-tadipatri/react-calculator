#!/bin/sh
currdir=`pwd`
dirset="public src"
branch=${1?"Specify branch for user"}
git checkout main
git pull
git checkout -b $branch
basedir=`find staging/ -name src -type d`
if [ "$basedir" = "" ]
then
	echo "Src not found"
	exit
fi
pushd $basedir/..
for i in $dirset
do
	cp -av $i/* $currdir/$i/
done
popd
git status
