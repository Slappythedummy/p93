var firebaseConfig = {
      apiKey: "AIzaSyAOQRWLZfdHeXB0VVeOxWAP5Crk99_heFc",
      authDomain: "kwitter-cdc21.firebaseapp.com",
      databaseURL: "https://kwitter-cdc21-default-rtdb.firebaseio.com",
      projectId: "kwitter-cdc21",
      storageBucket: "kwitter-cdc21.appspot.com",
      messagingSenderId: "631831591311",
      appId: "1:631831591311:web:19e20cac1d627c5e75f3fa",
      measurementId: "G-8TZLFN245V"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code

                  //End code
            });
      });
}
getData();