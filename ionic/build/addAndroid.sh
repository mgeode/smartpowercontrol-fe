#!/usr/bin/env bash

source ./env.properties

echo "* Building in DIR: ${PDIR}"
cd ${PDIR}
ionic platform add android
cordova plugin add cordova-plugin-statusbar
#cordova plugin add cordova-plugin-splashscreen
#cordova plugin add cordova-plugin-network-information
ionic build android