#!/bin/bash

source ./env.properties
if [ ! -d $WDIR ]; then
    echo "Cant read Ionicpath";
    echo $WDIR
    exit 1;
fi

if [ ! -d ${PDIR}/www ]; then
    cd ${WDIR}
    echo "ionic start ${PNAME} sidemenu"
    ionic start ${PNAME} sidemenu
    echo "ionic platform add android"
    ionic platform add android
    cordova plugin add cordova-plugin-statusbar
    cordova plugin add cordova-plugin-splashscreen
    cordova plugin add cordova-plugin-network-information
    ionic build android
fi


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


cd ${PDIR}
ionic serve

