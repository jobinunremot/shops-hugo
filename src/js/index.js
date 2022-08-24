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


// Navbar Open Search
const navSearchInput = document.getElementById("navSearchInput");

function showNavSearchInput() {
    navSearchInput.classList.remove("invisible");
    navSearchInput.classList.remove("-top-full");
    navSearchInput.classList.add("top-0");
}

function hideNavSearchInput() {
    navSearchInput.classList.add("invisible");
    navSearchInput.classList.add("-top-full");
    navSearchInput.classList.remove("top-0");
}

// Search Input List Functionality Second Page
const searchList2 = document.getElementById("searchList2");
const searchInputContainer2 = document.getElementById("searchInputContainer2");


function showSearchList2() {
    searchList2.classList.remove("invisible");
}

function hideSearchList2() {
    searchList2.classList.add("invisible");
}

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
let isFilteredFieldActivated = false;

function activateFilterField() {
    if (isFilteredFieldActivated == true) {
        document.querySelectorAll('.filter-options').forEach(el => el.classList.remove('show'));
        document.querySelectorAll('.filter-options').forEach(el => el.classList.add('hide'));
        isFilteredFieldActivated = false;
    } else {
        document.querySelectorAll('.filter-options').forEach(el => el.classList.add('show'));
        document.querySelectorAll('.filter-options').forEach(el => el.classList.remove('hide'));
        isFilteredFieldActivated = true;
    }
}

function filterFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    div = document.getElementById("myDropdown");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
        txtValue = a[i].textContent || a[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            a[i].style.display = "";
        } else {
            a[i].style.display = "none";
        }
    }
}

// Show Filtered Form
let shownFilteredForm = false;

function showFilterForm() {
    const filterForm = document.getElementById("filterForm");
    if (shownFilteredForm === true) {
        filterForm.classList.add("hidden");
        filterForm.classList.remove("flex");
        shownFilteredForm = false;
    } else {
        filterForm.classList.remove("hidden");
        filterForm.classList.add("flex");
        shownFilteredForm = true;
    }
}

// Show Map on Mobile Screen 2nd Page
function showMap() {
    const footerSection = document.getElementById("footer");
    const categoryGalleryContent = document.getElementById("categoryGalleryContent");
    const categoryMapContent = document.getElementById("categoryMapContent");
    categoryGalleryContent.classList.add("hidden");
    categoryMapContent.classList.remove("hidden");
    footerSection.classList.add("hidden");
}
function hideMap() {
    const categoryGalleryContent = document.getElementById("categoryGalleryContent");
    const categoryMapContent = document.getElementById("categoryMapContent");
    categoryGalleryContent.classList.remove("hidden");
    categoryMapContent.classList.add("hidden");
    footerSection.classList.remove("hidden");
}


// Rating
function ratingUpdate(ratingIndex) {
    const givenRating = document.getElementsByClassName("give-rating");
    const reviewRatingSummarized = document.getElementById("reviewRatingSummarized");

    for (let i = 0; i <= givenRating.length - 1; i++) {
        if (i <= ratingIndex) {
            givenRating[i].classList.add("text-primary");
            givenRating[i].classList.remove("text-secondary");
        } else {
            givenRating[i].classList.remove("text-primary");
            givenRating[i].classList.add("text-secondary");
        }
    }

    if (ratingIndex === 0) {
        reviewRatingSummarized.innerHTML = "Terrible";
    } else if (ratingIndex === 1) {
        reviewRatingSummarized.innerHTML = "Poor";
    } else if (ratingIndex === 2) {
        reviewRatingSummarized.innerHTML = "Average";
    } else if (ratingIndex === 3) {
        reviewRatingSummarized.innerHTML = "Very Good";
    } else if (ratingIndex === 4) {
        reviewRatingSummarized.innerHTML = "Exceptional";
    }


}



//PinPoints on Map
// PinPoints for multiple locations 
function initialise() {
    // create map object and apply properties
    var map = new google.maps.Map(document.getElementById("multipointsMap"), myOptions);
    if (map === null) {
        return;
    }
    // create object literal to store map properties
    var myOptions = {
        center: new google.maps.LatLng(34.1455215, -118.3642243),//Add the central point of the map
        zoom: 12, // set zoom level
        mapTypeId: google.maps.MapTypeId.ROADMAP // apply tile (options include ROADMAP, SATELLITE, HYBRID and TERRAIN)
    };

    // create map bounds object
    var bounds = new google.maps.LatLngBounds();

    // create array containing locations
    var locations = [
        ['Place 1', 34.1455215, -118.3642243],
        ['Place 2', 34.1455215, , -118.3642213],
        ['Place 3', 34.1563689, -118.33498327]
    ];

    // loop through locations and add to map
    for (var i = 0; i < locations.length; i++) {
        // get current location
        var location = locations[i];

        // create map position
        var position = new google.maps.LatLng(location[1], location[2]);

        // add position to bounds
        bounds.extend(position);

        // create marker (https://developers.google.com/maps/documentation/javascript/reference#MarkerOptions)
        var marker = new google.maps.Marker({
            animation: google.maps.Animation.DROP
            , icon: "http://www.google.com/intl/en_us/mapfiles/ms/micons/red-dot.png"
            , map: map
            , position: position
            , title: location[0]
        });

        // create info window and add to marker (https://developers.google.com/maps/documentation/javascript/reference#InfoWindowOptions)
        google.maps.event.addListener(marker, 'click', (
            function (marker, i) {
                return function () {
                    var infowindow = new google.maps.InfoWindow();
                    infowindow.setContent(locations[i][0]);
                    infowindow.open(map, marker);
                };
            }
        )(marker, i));
    };

    // fit map to bounds
    map.fitBounds(bounds);
}


// PinPoints for a single location        
function loadMap() {
    var mapOptions = {
        center: new google.maps.LatLng(34.178630, -118.343878),
        zoom: 10,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var map = new google.maps.Map(document.getElementById("singlePinPoint"), mapOptions);
    if (map === null) {
        return;
    }
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(34.1455215, -118.3642243),
        map: map,
    });
}


// Carousel Slider
const sliderContainer = [...document.querySelectorAll('.slider-container')];
const nextButton = [...document.querySelectorAll('.nxt-btn')];
const prevButton = [...document.querySelectorAll('.pre-btn')];

sliderContainer.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nextButton[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    });

    prevButton[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    });
});






























