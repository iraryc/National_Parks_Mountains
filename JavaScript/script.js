"use strict"

const locationsArray = [
    "Alabama",
    "Alaska",
    "American Samoa",
    "Arizona",
    "Arkansas",
    "California",
    "Colorado",
    "Connecticut",
    "Delaware",
    "DC",
    "Florida",
    "Georgia",
    "Guam",
    "Hawaii",
    "Idaho",
    "Illinois",
    "Indiana",
    "Iowa",
    "Kansas",
    "Kentucky",
    "Louisiana",
    "Maine",
    "Maryland",
    "Massachusetts",
    "Michigan",
    "Minnesota",
    "Mississippi",
    "Missouri",
    "Montana",
    "Nebraska",
    "Nevada",
    "New Hampshire",
    "New Jersey",
    "New Mexico",
    "New York",
    "North Carolina",
    "North Dakota",
    "Ohio",
    "Oklahoma",
    "Oregon",
    "Pennsylvania",
    "Puerto Rico",
    "Rhode Island",
    "South Carolina",
    "South Dakota",
    "Tennessee",
    "Texas",
    "Utah",
    "Vermont",
    "Virgin Islands",
    "Virginia",
    "Washington",
    "West Virginia",
    "Wisconsin",
    "Wyoming"
]

function dropdown(optionsArray){
    const dropdown = document.getElementById("parksDropdown");
   dropdown.innerHTML="";

   optionsArray.forEach(option => {
    const createNewOption = document.createElement("option");
    createNewOption.value = option;
    createNewOption.textContent = option;
    dropdown.appendChild(createNewOption);
   })
};

function setupDropDown(){
    document.getElementById("locationofPark").addEventListener('change', function() {
        dropdown(locationsArray);
    });

    document.getElementById("typeofPark").addEventListener('change', function() {
        dropdown(parkTypesArray);
    });
};

document.addEventListener('DOMContentLoaded', setupDropdown);