import kitchenImg from "./images/kitchen.jpg"

export function populateHome() {
    
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
    contentTitle.textContent = "Welcome to the restaurant of Man"
    contentTitle.classList.add("content-title");

    topHome.appendChild(contentTitle);
    contentGrid.appendChild(topHome);

    // Create left element in grid
    const leftHome = document.createElement("div");
    leftHome.classList.add("left-home");

    const leftImg = document.createElement("img");
    leftImg.src = kitchenImg;
    leftImg.classList.add("home-img");

    leftHome.appendChild(leftImg);
    contentGrid.appendChild(leftHome);

    // Create right element in grid
    const rightHome = document.createElement("div");
    rightHome.classList.add("right-home");

    const firstParagraph = document.createElement("p");
    firstParagraph.textContent = `
    This is where Man lives. This is where Man works. Only here you can try the delicacies of man. 
    Have you ever looked at Man eat and wondered what it tastes like? 
    This is it. This is your chance. There is only one way to find out.
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

