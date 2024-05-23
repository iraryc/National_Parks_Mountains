"use strict";

function mountaindropdown(optionsMounArray, defaultText) {
  const dropdown = document.getElementById("mountainsDropdown");
  if (!dropdown) {
    console.error("Dropdown element not found");
    return;
  }
  dropdown.innerHTML = "";

  const defaultOption = document.createElement("option");
  defaultOption.value = "";
  defaultOption.textContent = defaultText;
  defaultOption.disabled = true;
  defaultOption.selected = true;
  dropdown.appendChild(defaultOption);

  optionsMounArray.forEach((option) => {
    const createNewOption = document.createElement("option");
    createNewOption.value = option.name;
    createNewOption.textContent = option.name;
    dropdown.appendChild(createNewOption);
  });
}

function setupMountainDropDown() {
  const mountainDropDownSection = document.getElementById(
    "mountainDropDownSection"
  );
  mountainDropDownSection.style.display = "block";

  mountaindropdown(mountainsArray, "Select Mountain Information");

  document
    .getElementById("mountainsDropdown")
    .addEventListener("change", function () {
      const selectedMountain = mountainsArray.find(
        (mountain) => mountain.name === this.value
      );

      if (selectedMountain) {
        const mountainCard = document.getElementById("displayParks");
        mountainCard.innerHTML = 
        `<div class="card mb-3 cardmountain" id="displayParks">
            <img src="${selectedMountain.img}" class="card-img-top mountainimage justify-content-center" alt="" id="parkImageDisplay">
            <div class="card-body">
            <h5 class="card-title" id="cardTitle">${selectedMountain.name}</h5>
            <p class="card-text" id="cardAddress">${selectedMountain.elevation}</p>
            <p class="card-text" id="cardContact">${selectedMountain.effort}</p>
            <p class="card-text" id="cardLat&Long">${selectedMountain.desc}</p>
            <p class="card-text" id="cardWebsite">${selectedMountain.elevation}</p>
            </div>
        </div>`;
        // document.getElementById("displayParks").style.display = 'block';
        // document.getElementById("parkImageDisplay").src = selectedMountain.img;
        // document.getElementById("cardTitle").textContent = selectedMountain.name;
        // document.getElementById("cardAddress").textContent = `Elevation: ${selectedMountain.elevation} ft`;
        // document.getElementById("cardContact").textContent = `Effort: ${selectedMountain.effort}`;
        // document.getElementById("cardLat&Long").textContent = `Coordinates: ${selectedMountain.coords.lat}, ${selectedMountain.coords.lng}`;
        // document.getElementById("cardWebsite").textContent = selectedMountain.desc;
      }
    });
}

document.addEventListener("DOMContentLoaded", setupMountainDropDown);
