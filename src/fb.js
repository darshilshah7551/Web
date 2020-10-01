import firebase from 'firebase/app'
import 'firebase/firestore'
<script src="https://www.gstatic.com/firebasejs/7.21.1/firebase-app.js"></script>

var firebasConfig = {
  apiKey: "AIzaSyC4hYd0ORcZ6TRITp3Re0JCxkgHFCEOGA0",
  authDomain: "testing-7509b.firebaseapp.com",
  databaseURL: "https://testing-7509b.firebaseio.com",
  projectId: "testing-7509b",
  storageBucket: "testing-7509b.appspot.com",
  messagingSenderId: "708474750434",
  appId: "1:708474750434:web:d360b57d2fd7dbd65ca5bb"
};

  firebase.initializeApp(firebasConfig);
  const db = firebase.firstore();
  db.settings({ timestampInsnalshot: true });
  export default db; 
  