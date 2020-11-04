#!/bin/bash

source ./env.properties
alias_name="mgeo"
apk_file=${PDIR}/platforms/android/build/outputs/apk/android-release-unsigned.apk
VERSION=$(date +%y%m%d%H%M)

#
cd ${PDIR}
cordova plugin rm cordova-plugin-console
#cordova build --release android
ionic build --release android

# Generate key
#keytool -genkey -v -keystore /tmp/my-release-key.keystore -alias ${alias_name} -keyalg RSA -keysize 2048 -validity 10000
jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore /etc/mgeo.keystore ${apk_file} ${alias_name}
~/Library/Android/sdk/build-tools/25.0.0/zipalign -v 4 ${apk_file} ~/Downloads/${PNAME}-V${VERSION}.apk
