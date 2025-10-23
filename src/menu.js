export function populateMenu() {

    // Get and clear content div
    const mainContent = document.getElementById("content")
    mainContent.innerHTML = "";

    // Create content wrapper
    const menuWrapper = document.createElement("div");
    menuWrapper.classList.add("menu-wrapper");

    // Create menu title nodes
    const menuTitle = document.createElement("h2");
    menuTitle.classList.add("menu-title");
    menuTitle.textContent = "CHEZ MAN MENU";

    const menuDate = document.createElement("p");
    menuDate.classList.add("menu-date");
    menuDate.textContent = "23rd October 2025";    

    menuWrapper.append(menuTitle, menuDate);

    // Create menu starters
    const menuStarters = document.createElement("h3");
    menuStarters.classList.add("menu-subtitle");
    menuStarters.textContent = "STARTERS";

    const startersUl = document.createElement("ul");
    startersUl.classList.add("menu-list");

    const starter1 = document.createElement("li");
    starter1.classList.add("menu-item");
    starter1.textContent = "Man's beef tongue carpaccio";

    const starter2 = document.createElement("li");
    starter2.classList.add("menu-item");
    starter2.textContent = "Man's yellowfin tuna cevice";

    const starter3 = document.createElement("li");
    starter3.classList.add("menu-item");
    starter3.textContent = "Man's soup a l'oignon with bone marrow and gruyere";

    startersUl.append(starter1, starter2, starter3);
    menuWrapper.append(menuStarters, startersUl);

    // Create menu mains
    const menuMains = document.createElement("h3");
    menuMains.classList.add("menu-subtitle");
    menuMains.textContent = "MAINS";

    const mainsUl = document.createElement("ul");
    mainsUl.classList.add("menu-list");

    const main1 = document.createElement("li");
    main1.classList.add("menu-item");
    main1.textContent = "Man's entrecote steak frites with tarragon sauce";

    const main2 = document.createElement("li");
    main2.classList.add("menu-item");
    main2.textContent = "Man's punhetas de bacalhau";

    const main3 = document.createElement("li");
    main3.classList.add("menu-item");
    main3.textContent = "Man's extremely over the top lasagna";

    mainsUl.append(main1, main2, main3);
    menuWrapper.append(menuMains, mainsUl);

    // Create menu Desserts
    const menuDesserts = document.createElement("h3");
    menuDesserts.classList.add("menu-subtitle");
    menuDesserts.textContent = "MAINS";

    const dessertsUl = document.createElement("ul");
    dessertsUl.classList.add("menu-list");

    const dessert1 = document.createElement("li");
    dessert1.classList.add("menu-item");
    dessert1.textContent = "Man's creme brulee";

    const dessert2 = document.createElement("li");
    dessert2.classList.add("menu-item");
    dessert2.textContent = "Man's camel's dribble";

    dessertsUl.append(dessert1, dessert2);
    menuWrapper.append(menuDesserts, dessertsUl);

    // Add content to page
    mainContent.appendChild(menuWrapper);

}