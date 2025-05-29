import { auth, signInWithEmailAndPassword } from './firebase-config.js';

window.login = function() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      window.location.href = "dashboard.html";
    })
    .catch((error) => {
      document.getElementById("status").innerText = "Errore di login";
    });
};