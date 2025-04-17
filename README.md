#  ECE:4880 Lab 3 – Team Portfolio Website

##  Project Overview

This is a group portfolio website created for **Lab 3** of *Principles of ECE Design (ECE:4880)* at the University of Iowa, Spring 2025. The website showcases team member profiles, a contact form for each member, and password-protected content. It is designed to be intuitive, informative, and secure, following best practices in UI/UX and basic web development.

##  Team Members

- Sam Gorman
- Bret Okrasinski
- Joe Manternach

##  Live Website

Website hosted on: [Add your MyWeb or GitHub Pages URL here]

---

##  Features

-  Password-protected section (`Spr2025Lab3`)
-  Contact forms for each member (stores messages as timestamped HTML logs)
-  Styled using the University of Iowa Black & Gold theme
-  Responsive and accessible design
-  Offline script to manage password-protected content

---

##  Project Folder Structure

``` 
ece4880-lab3-portfolio/
├── index.html # Homepage with navigation
├── about.html # Optional team info/about page
├── member1.html # Profile page with contact form
├── member2.html
├── member3.html
├── README.md # This file
├── .gitignore # Ignore system files & logs
│ ├── style/
  │ └── style.css # All styling in one place
│ ├── js/
  │ └── script.js # Handles password & contact form logic
│ ├── protected/
  │ ├── index.html # Protected content main page
  │ └── logs/
    │ └── .gitkeep # Keeps logs folder tracked by Git
│ ├── scripts/
  │ └── generate_protected.py # Offline tool for generating protected content
│ └── assets/
  └── logo-placeholder.png # Optional: team logos or graphics
 ```


