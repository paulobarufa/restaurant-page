import chefImg from "./images/chef.jpg"

export function populateAbout() { 

    // Get and clear content div
    const mainContent = document.getElementById("content")
    mainContent.innerHTML = "";

    // Create content grid
    const contentGrid = document.createElement("div");
    contentGrid.classList.add("content-grid");

    // Create top element in grid
    const topHome = document.createElement("div");
    topHome.classList.add("top-home");

    const contentTitle = document.createElement("h2");
    contentTitle.textContent = "Meet Man's team"
    contentTitle.classList.add("content-title");

    topHome.appendChild(contentTitle);
    contentGrid.appendChild(topHome);

    // Create left element in grid
    const leftHome = document.createElement("div");
    leftHome.classList.add("left-home");

    const leftImg = document.createElement("img");
    leftImg.src = chefImg;
    leftImg.classList.add("home-img");

    leftHome.appendChild(leftImg);
    contentGrid.appendChild(leftHome);

    // Create right element in grid
    const rightHome = document.createElement("div");
    rightHome.classList.add("right-home");

    const firstParagraph = document.createElement("p");
    firstParagraph.textContent = `
    You thought there was really a team behind Chez Man? Well there is. 
    A one Man team. Man's team. The team is Man. There is only one Man that could ever make the team, and that is Man.
    `

    const secondParagraph = document.createElement("p");
    secondParagraph.textContent = `
    Book now to have your own Man-ly experience at Chez Man.
    `

    rightHome.appendChild(firstParagraph);
    rightHome.appendChild(secondParagraph);
    contentGrid.appendChild(rightHome);
    
    // Add grid to content div
    mainContent.appendChild(contentGrid);
    
}