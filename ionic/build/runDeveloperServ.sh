#!/bin/bash

source ./env.properties
echo "cp -Rf ${SRC}/www/* ${PDIR}/www/ && ionic serve"
cp -Rf ${SRC}/www/* ${PDIR}/www/
cd ${PDIR}
ionic serve
