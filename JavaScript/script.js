"use strict"

function dropdown(optionsArray, defaultText){
    const dropdown = document.getElementById("parksDropdown");
   dropdown.innerHTML="";

   const defaultOption = document.createElement("option");
   defaultOption.value="";
   defaultOption.textContent = defaultText;
   defaultOption.disabled = true;
   defaultOption.selected = true;
   dropdown.appendChild(defaultOption);

   optionsArray.forEach(option => {
    const createNewOption = document.createElement("option");
    createNewOption.value = option;
    createNewOption.textContent = option;
    dropdown.appendChild(createNewOption);
   })
};


function setupDropDown(){

    const dropdownSection = document.getElementById("dropdownSection");

    document.getElementById("locationofPark").addEventListener('change', function() {
        dropdown(locationsArray,"Search for park location:");
        dropdownSection.style.display = "block";
    });

    document.getElementById("typeofPark").addEventListener('change', function() {
        dropdown(parkTypesArray, "Search for park type: ");
        dropdownSection.style.display = "block";

    });

    document.getElementById("parksDropdown").addEventListener('change', displayParks)
};


function displayParks() {
    const selectedValue = document.getElementById("parksDropdown").value;

    let filteredParks = [];
    if (parkTypesArray.indexOf(selectedValue) > -1) {
        filteredParks = nationalParksArray.filter(park => park.LocationName.includes(selectedValue));
    } else if (locationsArray.indexOf(selectedValue) > -1) {
        filteredParks = nationalParksArray.filter(park => park.State === selectedValue);
    }

    const displayCard = document.getElementById("displayParks");
    displayCard.innerHTML = "";

    filteredParks.forEach(park => {
        const card = `
            <div class="col-lg-4 col-sm-6">
                <div class="nationalpark">
                    <img class="myaboutimages" src="/images/grandcanyonpixbay.jpg" alt="Park Image">
                    <div class="overlay">
                        <div>
                            <h4 class="text-white">${park.LocationID}</h4>
                            <h4 class="text-white">${park.LocationName}</h4>
                            <p class="text-white">${park.Address}, ${park.City}, ${park.State}, ${park.ZipCode}</p>
                            <p class="text-white">${park.Phone} | ${park.Fax}</p>
                            <p class="text-white"><a href="${park.Visit}" target="_blank" class="text-white">Visit Website</a></p>
                        </div>
                    </div>
                </div>
            </div>`;
        displayCard.innerHTML += card;
    });
}


document.addEventListener('DOMContentLoaded', setupDropDown);

