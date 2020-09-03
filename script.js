// Write your JavaScript code here!

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
window.addEventListener("load", function() {
   let form = document.getElementById("launchForm");
   form.addEventListener("submit", function(event) {
      let pilotNameInput = document.querySelector("input[name=pilotName");
      let coPilotNameInput = document.querySelector("input[name=copilotName");
      let fuelLevelInput = document.querySelector("input[name=fuelLevel");
      let cargoMassInput = document.querySelector("input[name=cargoMass");

      if(pilotNameInput.value === "" || coPilotNameInput.value === "" || fuelLevelInput.value === "" || cargoMassInput.value === "") {
         alert("All fields are required.");
         preventDefault();
      }

      if(!isNaN(pilotNameInput.value) || !isNaN(coPilotNameInput.value)) {
         alert("Pilot and CoPilot fields can't contain numbers.");
         preventDefault();
      }

      if(isNaN(fuelLevelInput.value) || isNaN(cargoMassInput.value)) {
         alert("Fuel level and cargo mass must be numbers.");
         preventDefault();
      }


   });
});