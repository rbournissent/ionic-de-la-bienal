#!/bin/bash

if [ -d "platforms/android" ]; then
  echo "Copying keystore and release-signing.properties files"
  cp hackathon-de-la-bienal.keystore platforms/android/
  cp release-signing.properties platforms/android/
fi