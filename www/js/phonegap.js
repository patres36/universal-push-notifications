var setupPhonegapPush = function() {

  var push = window.PushNotification.init({
    android: {
      senderID: '604077393164'
    },
    browser: {},
    ios: {
      sound: true,
      vibration: true,
      badge: true,
      // use fcm to push via APNs
      senderID: '604077393164',
      gcmSandbox: false
    },
    windows: {}
  });

  push.on('registration', function(data) {
    pushManager.setRegistrationId(data.registrationId);
    pushManager.registerSuccessfulSetup('phonegap');
  });

  push.on('error', function(error) {
    pushManager.error(error);
  });

  push.on('notification', function(data) {
    pushManager.handleNotification(data);

    // callback after finishing handling (iOS)
    push.finish();
  });

};

pushManager.requestPermissionCallback = setupPhonegapPush;