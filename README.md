# ionic-de-la-bienal

Ionic App Demo for 'Hackathon de la Bienal'
Chat app with 3 tabs: Conversations, Chats and Settings

## Instalation
If you don't have Cordova and Ionic:
```
[sudo] npm i -g cordova ionic
```

### App Instalation
1. Clone this repo
1. ```npm install```
1. ```bower install```

### Run the App
#### Browser
```ionic serve```

#### Android
```ionic platforms add android```
```ionic run|emulate android```

#### iOS
```ionic platforms add ios```
```ionic emulate ios```

### Build APK for Android
```[ionic platforms add android]```

#### Create keystore file
http://developer.android.com/intl/es/tools/publishing/app-signing.html

#### Generate APK
```ionic build --release android```
