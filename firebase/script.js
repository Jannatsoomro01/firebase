  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.3.0/firebase-analytics.js";
  import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.3.0/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you want to use

  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAWvIekxxyQrehvR27_9i8hSasKzc0iwFI",
    authDomain: "authentication-b1b2b.firebaseapp.com",
    projectId: "authentication-b1b2b",
    storageBucket: "authentication-b1b2b.firebasestorage.app",
    messagingSenderId: "714588605316",
    appId: "1:714588605316:web:5a24d4870088f19eefebd1",
    measurementId: "G-6CB5LTD6QW"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
const submit = document.getElementById("submit")
submit.addEventListener("click",function (event){
   event.preventDefault()
   const email = document.getElementById("email").value  
const password = document.getElementById("password").value 
const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    alert('signup successfully...')

    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
    // ..
  });
})




