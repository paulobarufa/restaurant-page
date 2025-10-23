import "./style.css"

import { populateHome } from "./home"
import { populateMenu } from "./menu"

// Initial paage render
populateHome();

// Get nav buttons
const homeBtn = document.getElementById("home");
const menuBtn = document.getElementById("menu");
const aboutBtn = document.getElementById("about");

// Configure nav buttons
homeBtn.addEventListener("click", populateHome);
menuBtn.addEventListener("click", populateMenu);
// aboutBtn.addEventListener("click", populateAbout);