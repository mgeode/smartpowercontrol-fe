#!/bin/bash

source ./env.properties



# COPY relevanted files
echo " * Copy from Source ${SRC} to ${PDIR}/"
find ${PDIR}/ -name "*.png" -exec rm -f {} \;
find ${PDIR}/ -name "*.psd" -exec rm -f {} \;

cp -Rf ${SRC}/www/* ${PDIR}/www/
cp -Rf ${RSRC}/* ${PDIR}/resources/
#cp -vf ${SRC}/config.xml ${PDIR}/

find ${PDIR}/ -name ".DS_Store" -type f -exec rm -f {} \;
find ${PDIR}/ -name ".svn" -type d -exec rm -Rf {} \;

cd ${PDIR}
ionic resources --ignore-cache


