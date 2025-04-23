// Import the functions needed from the SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.0/firebase-app.js";
import { getDatabase , ref , push , set ,remove , get} from "https://www.gstatic.com/firebasejs/11.3.0/firebase-database.js"

// ================================
// Firebase Configuration
// ================================


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

// References that store sensor data (in degrees F).
const message_data_in_DB = ref(database, 'messages');

// Fetch the data from the database every 1000 ms.
setInterval(function() { 
  
    // Get a snapshot of the temperature data from sensor 1.
    get(message_data_in_DB).then((snapshot) => {
      // Manipulate the data. If there is no data console log an error.
      if (snapshot.exists()) {
        
        // Turn the data into an array of arrays [ [],[] , [],[] , ...]
        var message_data = Object.entries(snapshot.val());

        // message_data.length returns the number of messages
        // message_data[i][1] returns the i-th messages information
        var number_of_messages = message_data.length;
        
        clearMessages();

        for(let i = 0; i < number_of_messages; i++) {
            
            var date = message_data[i][1]['date'];
            var to = message_data[i][1]['to'];
            var from = message_data[i][1]['from'];
            var subject = message_data[i][1]['subject'];
            var message = message_data[i][1]['message'];

            addMessage({ date, to, from, subject, message })
        }
      }
    }).catch((error) => {
      // Display an error if there is no data available.
      console.error("Error getting message data:", error);
    });
  
  }, 5000);


  function addMessage({ date, to, from, subject, message }) {
    const outputEl = document.getElementById("output");
  
    const row = document.createElement("tr");
  
    [date, to, from, subject, message].forEach(text => {
      const td = document.createElement("td");
      td.textContent = text;
      row.appendChild(td);
    });
  
    outputEl.appendChild(row);
  }

  function clearMessages() {
    const outputEl = document.getElementById("output");
    outputEl.innerHTML = ""; // This removes all child rows
  }