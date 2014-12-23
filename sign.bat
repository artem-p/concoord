jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore ..\keystore\concoord.keystore platforms\android\ant-build\CordovaApp-release-unsigned.apk concoord
rm platforms\android\ant-build\concoord-release.apk
zipalign -v 4 platforms\android\ant-build\CordovaApp-release-unsigned.apk platforms\android\ant-build\concoord-release.apk