var pushManager = {
  requestInitializationCallback: null,
  requestPermissionCallback: null,

  setRegistrationId: function(id) {
    console.log('set registration id: ' + id);

    sendRegistrationId(id);
  },

  error: function(error, msg) {
    console.log(msg || 'Push error: ', error);
  },

  handleNotification: function(data) {
    console.log('notification event', data);
  },

  requestInitialization: function() {
    if (this.requestInitializationCallback) {
      this.requestInitializationCallback();
    }
  },


  requestPermission: function() {
    if (this.requestPermissionCallback) {
      this.requestPermissionCallback();
    }
  },

  registerSuccessfulSetup: function(service, requestPermissionCallback) {
    console.log('server ', service, ' is set up!');
    this.requestPermissionCallback = requestPermissionCallback;
  }
};