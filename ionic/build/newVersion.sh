#!/bin/bash
echo "SmartPowerControl START" && ./buildAndroid.sh && mv ~/Downloads/SmartPowerControl-V1611*.apk ~/Downloads/SmartPowerControl.apk  && scp ~/Downloads/SmartPowerControl.apk  root@mecsrv:/var/www/htdocs/ && echo "SmartPowerControl FINISHED"
