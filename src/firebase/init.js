import firebase from 'firebase'
// import firestore from 'firebase/firestore'

// Your web app's Firebase configuration
  var firebaseConfig = {
      apiKey: "AIzaSyCSeBQfLlLxJy5EqbUVqbus5xyZcGuk4SA",
      authDomain: "ninja-smoothies-4c10e.firebaseapp.com",
      databaseURL: "https://ninja-smoothies-4c10e.firebaseio.com",
      projectId: "ninja-smoothies-4c10e",
      storageBucket: "ninja-smoothies-4c10e.appspot.com",
      messagingSenderId: "353262827529",
      appId: "1:353262827529:web:c47d3ca1510c9efa8560d8"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  
  export default firebaseApp.firestore()
  