// setupPassword.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.0/firebase-app.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/11.3.0/firebase-database.js";

const firebase_config = {
  apiKey: "AIzaSyAPsQHqyvS9NnlnteoS-3lh0VjkEAc6igw",
  authDomain: "senior-design-lab-1-4b7d7.firebaseapp.com",
  databaseURL: "https://senior-design-lab-1-4b7d7-default-rtdb.firebaseio.com",
  projectId: "senior-design-lab-1-4b7d7", 
  storageBucket: "senior-design-lab-1-4b7d7.firebasestorage.app",
  messagingSenderId: "364664400424",
  appId: "1:364664400424:web:78a386ea0a842ff7b2e31d",
  measurementId: "G-GD1LMLCTHE"
};

const app = initializeApp(firebase_config);
const database = getDatabase(app);
const passwordRef = ref(database, 'admin/password');

// Set the password - change "YourSecurePassword" to whatever password you want to use
set(passwordRef, "Spr2025Lab3")
  .then(() => {
    document.getElementById('status').textContent = "Password set successfully!";
    document.getElementById('status').style.color = "green";
  })
  .catch((error) => {
    document.getElementById('status').textContent = "Error setting password: " + error.message;
    document.getElementById('status').style.color = "red";
  });