/*
Give the service worker access to Firebase Messaging.
Note that you can only use Firebase Messaging here, other Firebase libraries are not available in the service worker.
*/
importScripts('https://www.gstatic.com/firebasejs/7.23.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.23.0/firebase-messaging.js');

/*
Initialize the Firebase app in the service worker by passing in the messagingSenderId.
* New configuration for app@pulseservice.com
*/
firebase.initializeApp({
  			apiKey: "AIzaSyDgwws4FKqq8M9qlKfiWg-AozD3eMsligU",
			authDomain: "ionic-apps-212011.firebaseapp.com",
			databaseURL: "https://ionic-apps-212011.firebaseio.com",
			projectId: "ionic-apps-212011",
			storageBucket: "ionic-apps-212011.appspot.com",
			messagingSenderId: "423240615281",
			appId: "1:423240615281:web:91c8e5842816ea5e6c62d0"
});

/*
Retrieve an instance of Firebase Messaging so that it can handle background messages.
*/
const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  // Customize notification here
  const notificationTitle = 'Background Message Title';
  const notificationOptions = {
    body: 'Background Message body.',
    icon: '/firebase-logo.png'
  };

  return self.registration.showNotification(notificationTitle,
      notificationOptions);
});

