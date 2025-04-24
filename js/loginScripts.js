import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.0/firebase-app.js";
import { getDatabase , ref , push , set ,remove , get} from "https://www.gstatic.com/firebasejs/11.3.0/firebase-database.js"

// Connect the database.
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

// Initialize Firebase connection.
const firebase_app = initializeApp(firebase_config);

// Get the database and it's references.
const database = getDatabase(firebase_app);
