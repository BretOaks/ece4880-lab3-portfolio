// Create a new file called loginScripts.js in your js folder

// Import the Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.0/firebase-app.js";
import { getDatabase, ref, get } from "https://www.gstatic.com/firebasejs/11.3.0/firebase-database.js";

// Firebase configuration - same as in your other scripts
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

// Initialize Firebase
const firebase_app = initializeApp(firebase_config);
const database = getDatabase(firebase_app);

// Reference to where the password is stored
const passwordRef = ref(database, 'admin/password');

// Get the login form and add event listener
const loginForm = document.getElementById('login-form');
const passwordInput = document.getElementById('password');
const errorMessage = document.getElementById('error-message');

loginForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission
  
  const enteredPassword = passwordInput.value;
  
  // Get the correct password from Firebase
  get(passwordRef).then((snapshot) => {
    if (snapshot.exists()) {
      const correctPassword = snapshot.val();
      
      // Check if password matches
      if (enteredPassword === correctPassword) {
        // Password is correct, redirect to messages.html
        window.location.href = 'messages.html';
      } else {
        // Password is incorrect, show error
        showError("Incorrect password. Please try again.");
      }
    } else {
      // No password found in database
      showError("Authentication error. Please contact administrator.");
    }
  }).catch((error) => {
    console.error("Error checking password:", error);
    showError("Authentication error. Please try again later.");
  });
});

// Function to display error message
function showError(message) {
  errorMessage.textContent = message;
  errorMessage.style.display = 'block';
  
  // Clear the error message after 3 seconds
  setTimeout(() => {
    errorMessage.style.display = 'none';
  }, 3000);
}