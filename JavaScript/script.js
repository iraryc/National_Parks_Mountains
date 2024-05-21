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
};

document.addEventListener('DOMContentLoaded', setupDropDown);