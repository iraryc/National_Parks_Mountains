"use strict"

function mountaindropdown(optionsMounArray, defaultText){
    const dropdown = document.getElementById("mountainsDropdown");
    if(!dropdown){
        console.error("Dropdown element not found");
        return;
    }
   dropdown.innerHTML="";

   const defaultOption = document.createElement("option");
   defaultOption.value="";
   defaultOption.textContent = defaultText;
   defaultOption.disabled = true;
   defaultOption.selected = true;
   dropdown.appendChild(defaultOption);

   optionsMounArray.forEach(option => {
    const createNewOption = document.createElement("option");
    createNewOption.value = option.name;
    createNewOption.textContent = option.name;
    dropdown.appendChild(createNewOption);
   })
};

function setupMountainDropDown(){

    const mountainDropDownSection = document.getElementById("mountainDropDownSection");
    mountainDropDownSection.style.display = 'block';

    mountaindropdown(mountainsArray, "Select Mountain Information");

    document.getElementById("mountainsDropdown").addEventListener('change', function(){
        const selectedMountain  = mountainsArray.find(mountain => mountain.name === this.value);
        
        if (selectedMountain) {
            document.getElementById("displayParks").style.display = 'block';
            document.getElementById("parkImageDisplay").src = selectedMountain.img;
            document.getElementById("cardTitle").textContent = selectedMountain.name;
            document.getElementById("cardAddress").textContent = `Elevation: ${selectedMountain.elevation} ft`;
            document.getElementById("cardContact").textContent = `Effort: ${selectedMountain.effort}`;
            document.getElementById("cardLat&Long").textContent = `Coordinates: ${selectedMountain.coords.lat}, ${selectedMountain.coords.lng}`;
            document.getElementById("cardWebsite").textContent = selectedMountain.desc;
        }
    });

   
};

document.addEventListener('DOMContentLoaded', setupMountainDropDown);