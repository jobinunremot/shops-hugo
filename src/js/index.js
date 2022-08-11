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
const hamburgerBtn = document.getElementById("hamburgerBtn");
const exploreList = document.getElementById("exploreList");
const helpList = document.getElementById("helpList");

function showNavMenu() {
    hamburgerMenuList.classList.remove("-left-full");
    hamburgerMenuList.classList.add("left-0");
}

function hideNavMenu() {
    hamburgerMenuList.classList.add("-left-full");
    hamburgerMenuList.classList.remove("left-0");
}

function showExploreList() {
    if (exploreList.classList.contains("invisible")) {
        exploreList.classList.remove("invisible");
    } else {
        exploreList.classList.add("invisible");
    }
}


function showHelpList() {
    if (helpList.classList.contains("invisible")) {
        helpList.classList.remove("invisible");
        helpList.classList.add("bg-opacity-50");
    } else {
        helpList.classList.add("invisible");
    }
}

document.onclick = function (e) {
    if (e.target.id !== 'hamburgerMenuList' && e.target.id !== 'hamburgerBtn') {
        if (e.target.offsetParent && e.target.offsetParent.id !== 'hamburgerMenuList')
            hideNavMenu();
    }
};
