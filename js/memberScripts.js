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

// References that store message data.
const message_data_in_DB = ref(database, 'messages');


// ================================
// Change tabs
// ================================

// needed for the tabs on memeber-pages.html
window.opentab = opentab;

// get the tab elements
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
    
// function to swap out which tab is considered the active tab (what is displayed)
function opentab(event, tabname) {
    // Remove 'active-link' from all tab links
    for (let i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active-link");
    }

    // Remove 'active-tab' from all tab contents
    for (let i = 0; i < tabcontents.length; i++) {
        tabcontents[i].classList.remove("active-tab");
    }

    // Add 'active-link' to the clicked tab
    event.currentTarget.classList.add("active-link");

    // Show the corresponding tab content
    document.getElementById(tabname).classList.add("active-tab");
}


// ================================
// Send Messages
// ================================

// variable to track the send button
const send_button_el = document.getElementById("send-button");

// variables to get the message information
const to_el = document.getElementById("to");
const from_el = document.getElementById("from");
const subject_el = document.getElementById("subject");
const message_el = document.getElementById("message");

// when the send button is clicked this will run
send_button_el.addEventListener("click" , function(){
    
    // get all the message data
    var to = to_el.value;
    var from = from_el.value;
    var subject = subject_el.value;
    var message = message_el.value;
    var date = getCurrentTimestamp()
      
    // format the message data
    var message_data = {'date': date,'to': to, 'from': from, 'subject': subject, 'message': message};
    
    // send the message data to the database
    push(message_data_in_DB,message_data);
    
    // clear the form elements
    from_el.value = ''
    subject_el.value = ''
    message_el.value = ''

    // make an alert to notify the user after the message is sent.
    alert("Message sent successfully!");
})

// gets the current time stamp in MM/DD/YYYY HH:MM:SS format
function getCurrentTimestamp() {
    const now = new Date();
  
    const pad = (num) => String(num).padStart(2, '0');
  
    const month = pad(now.getMonth() + 1);  // Months are 0-indexed
    const day = pad(now.getDate());
    const year = now.getFullYear();
  
    const hours = pad(now.getHours());
    const minutes = pad(now.getMinutes());
    const seconds = pad(now.getSeconds());
  
    return `${month}/${day}/${year} ${hours}:${minutes}:${seconds}`;
  }