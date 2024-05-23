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
        const mountainCard = document.getElementById("displayMountain");
        mountainCard.innerHTML = 
        `<div class="card mb-3 cardmountain ">
            <img src="${selectedMountain.img}" class="card-img-top mountainimage" alt="" id="parkImageDisplay">
            <div class="card-body">
            <h5 class="card-title" id="cardTitle">${selectedMountain.name}</h5>
            <h6 class="card-text" id="cardAddress">Elevation:</h6>
            <p class="card-text" id="cardAddress">${selectedMountain.elevation}</p>
            <h6 class="card-text" id="cardAddress">Effort Level:</h6>
            <p class="card-text" id="cardContact">${selectedMountain.effort}</p>
            <h6 class="card-text" id="cardAddress">Learn More:</h6>
            <p class="card-text" id="cardLat&Long">${selectedMountain.desc}</p>
            </div>
            <a herf="" class="btn btn-brand ms-lg-3 justify-content-end mountainBookButton">Book a Visit</a>
          </div>
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
