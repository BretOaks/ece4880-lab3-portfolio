// Load messages from localStorage
window.addEventListener('DOMContentLoaded', () => {
    const output = document.getElementById('output');
    const messages = JSON.parse(localStorage.getItem('contactMessages')) || [];
  
    if (!output) return;
  
    if (messages.length === 0) {
      output.innerHTML = '<p>No messages yet.</p>';
    } else {
      messages.forEach(msg => {
        const div = document.createElement('div');
        div.classList.add('message-block');
        div.innerHTML = `
          <p><strong>Name:</strong> ${msg.name}</p>
          <p><strong>Email:</strong> ${msg.email}</p>
          <p><strong>Message:</strong> ${msg.message}</p>
          <hr>
        `;
        output.appendChild(div);
      });
    }
  });

  var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
    
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