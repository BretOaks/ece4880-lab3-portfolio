// ================================
// Firebase Configuration
// ================================

// Import the functions needed from the SDKs
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

// References that stores message data
const message_data_in_DB = ref(database, 'messages');

// Fetch the data from the database every 5000 ms.
setInterval(function() { 
  
    // Get a snapshot of the message data.
    get(message_data_in_DB).then((snapshot) => {
      // Manipulate the data. If there is no data console log an error.
      if (snapshot.exists()) {
        
        // Turn the data into an array of arrays 
        var message_data = Object.entries(snapshot.val());

        // message_data.length returns the number of messages
        // message_data[i][1] returns the i-th messages information
        var number_of_messages = message_data.length;
        
        // clear the table on messages.html. 
        // if we dont do this then every 5 seconds we will make duplicate rows.
        clearMessages();

        // update the table on message.html on message at a time
        for(let i = 0; i < number_of_messages; i++) {
            
          // get data
          var date = message_data[i][1]['date'];
          var to = message_data[i][1]['to'];
          var from = message_data[i][1]['from'];
          var subject = message_data[i][1]['subject'];
          var message = message_data[i][1]['message'];

          // add it to the html file
          addMessage({ date, to, from, subject, message })
        }
      }
    }).catch((error) => {
      // Display an error if there is no data available.
      console.error("Error getting message data:", error);
    });
  
  }, 5000);

// add the message data to the table on messages.html
function addMessage({ date, to, from, subject, message }) {
  // get the element with output id (tbody tag)
  const outputEl = document.getElementById("output");

  // create a new row object
  const row = document.createElement("tr");

  // add the data to that new row object
  [date, to, from, subject, message].forEach(text => {
    const td = document.createElement("td");
    td.textContent = text;
    row.appendChild(td);
  });

  // add the new row to the table
  outputEl.appendChild(row);
}

// clear the table
function clearMessages() {
  const outputEl = document.getElementById("output");
  outputEl.innerHTML = ""; // This removes all child rows
}