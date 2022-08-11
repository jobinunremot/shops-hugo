// Search Input List Functionality
const searchList = document.getElementById("searchList");
const searchInputContainer = document.getElementById("searchInputContainer");


function showSearchList() {
    searchList.classList.remove("invisible");
    searchInputContainer.classList.add("rounded-b-none");
}

function hideSearchList() {
    searchList.classList.add("invisible");
    searchInputContainer.classList.remove("rounded-b-none");
}

// Hamburger Menu
const hamburgerMenuList = document.getElementById("hamburgerMenuList");

function showNavMenu() {
    hamburgerMenuList.classList.remove("-left-full");
    hamburgerMenuList.classList.add("left-0");
}

function hideNavMenu() {
    hamburgerMenuList.classList.add("-left-full");
    hamburgerMenuList.classList.remove("left-0");
}



