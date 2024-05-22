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

function displayParks(){
    const selectedValue = document.getElementById("parksDropdown").value;
    const filteredParks = nationalParksArray.filter(park => park.State === selectedValue);
    // const filterHistoricTypePark = parkTypesArray.filter(parkType => parkType.LocationName.includes("Historic"));
    
    const displayCard = document.getElementById("displayParks");
    displayCard.innerHTML = "";
    
    filteredParks.forEach(park => {
        const card = 
        // `<div class="card-body">
        //     <h5 class="card-title" id="cardTitle">${park.LocationName}</h5>
        //     <p class="card-text" id="cardAddress">${park.Address} ${park.City} ${park.State} ${park.ZipCode}</p>
        //     <p class="card-text" id="cardContact">${park.Phone} <br></br> ${park.Fax}</p>
        //     <p class="card-text" id="cardLat&Long">${park.Latitude} and ${park.Longitude}</p>
        //     <p class="card-text" id="cardWebsite">${park.Visit}</p>
        //   </div>`

        //   `<table class="table">
        //   <thead>
        //     <tr>
        //       <th scope="col">ID</th>
        //       <th scope="col">Location Name</th>
        //       <th scope="col">Address</th>
        //       <th scope="col">Contact</th>
        //       <th scope="col">URL</th>
        //     </tr>
        //   </thead>
        //   <tbody>
        //     <tr>
        //       <th scope="row">${park.LocationID}</th>
        //       <td>${park.LocationName}</td>
        //       <td>${park.Address} ${park.City} ${park.State} ${park.ZipCode}</td>
        //       <td>${park.Phone} <br></br> ${park.Fax}</td>
        //       <td>${park.Visit}</td>
        //     </tr>
        //   </tbody>
        // </table>`

        `<div class="col-lg-4 col-sm-6">
        <div class="nationalpark">
          <img class="myaboutimages" src="/images/grandcanyonpixbay.jpg" alt="adamsstory">
          <div class="overlay">
            <div>
              <h4 class="text-white">${park.LocationID}</h4>
              <h4 class="text-white">${park.LocationName}</h4>
              <p class="text-white">${park.Address} ${park.City} ${park.State} ${park.ZipCode}</p>
              <p class="text-white">${park.Phone} | ${park.Fax}</p>
              <p class="text-white">${park.Visit}</p>
            </div>
          </div>
        </div>
      </div>`

          displayCard.innerHTML += card; 
    });
       
    // filterHistoricTypePark.forEach(parkType => {
    //     const historiccard = 
    //     `<div class="col-lg-4 col-sm-6">
    //     <div class="nationalpark">
    //       <img class="myaboutimages" src="/images/grandcanyonpixbay.jpg" alt="adamsstory">
    //       <div class="overlay">
    //         <div>
    //           <h4 class="text-white">${park.LocationID}</h4>
    //           <h4 class="text-white">${park.LocationName}</h4>
    //           <p class="text-white">${park.Address} ${park.City} ${park.State} ${park.ZipCode}</p>
    //           <p class="text-white">${park.Phone} | ${park.Fax}</p>
    //           <p class="text-white">${park.Visit}</p>
    //         </div>
    //       </div>
    //     </div>
    //   </div>`
    //   displayCard.innerHTML += historiccard; 


    // })
        
        
    //user innerHTML +- park


}

document.addEventListener('DOMContentLoaded', setupDropDown);

