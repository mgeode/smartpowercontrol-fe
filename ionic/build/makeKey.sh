#!/usr/bin/env bash

BLD_DIR="/tmp/appbuilder"
alias_name="mgeo"
build_name="MgeoHomeApp"
apk_file="tmp_apk_file"

# Generate key
keytool -genkey -v -keystore /tmp/my-release-key.keystore -alias ${alias_name} -keyalg RSA -keysize 2048 -validity 10000

jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore /tmp/my-release-key.keystore ${BLD_DIR}/${apk_file}.apk ${alias_name}

~/Library/Android/sdk/build-tools/25.0.0/zipalign -v 4 ${BLD_DIR}/${apk_file}.apk ${BLD_DIR}/${BLD_NAME}.apk

cp ${BLD_DIR}/${BLD_NAME}.apk ~/Downloads/