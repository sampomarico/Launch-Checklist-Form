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
      let faultyItems = document.getElementById("faultyItems");
      document.getElementById("pilotStatus").innerHTML = `Pilot ${pilotNameInput.value} is ready for launch.`;
      document.getElementById("copilotStatus").innerHTML = `Co-Pilot ${coPilotNameInput.value} is ready for launch.`;

      if(pilotNameInput.value === "" || coPilotNameInput.value === "" || fuelLevelInput.value === "" || cargoMassInput.value === "") {
         alert("All fields are required.");
         event.preventDefault();
      }

      else if(!isNaN(pilotNameInput.value) || !isNaN(coPilotNameInput.value)) {
         alert("Pilot and CoPilot fields can't contain numbers.");
         event.preventDefault();
      }

      else if(isNaN(fuelLevelInput.value) || isNaN(cargoMassInput.value)) {
         alert("Fuel level and cargo mass must be numbers.");
         event.preventDefault();
      }

      else if(fuelLevelInput.value < 10000 && fuelLevelInput.value != "") {
         faultyItems.style.visibility = "visible";
         document.getElementById("fuelStatus").innerHTML = `Fuel level too low for launch.`;
         document.getElementById("launchStatus").style.color = "red";
         document.getElementById("launchStatus").innerHTML = `Shuttle not ready for launch`;
         event.preventDefault();
      }

      else if(cargoMassInput.value > 10000) {
         faultyItems.style.visibility = "visible";
         document.getElementById("cargoStatus").innerHTML = `Cargo mass too high for launch.`;
         document.getElementById("launchStatus").style.color = "red";
         document.getElementById("launchStatus").innerHTML = `Shuttle not ready for launch`;
         event.preventDefault();
      }

      else {
         faultyItems.style.visibility = "visible";
         document.getElementById("launchStatus").style.color = "green";
         document.getElementById("launchStatus").innerHTML = `Shuttle is ready for launch`;
         event.preventDefault();
         
      }
      fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
         response.json().then(function(json) {
           const div = document.getElementById("missionTarget");
           div.innerHTML = `
            <h2>Mission Destination</h2>
            <ol>
               <li>Name: ${json[0].name}</li>
               <li>Diameter: ${json[0].diameter}</li>
               <li>Star: ${json[0].star}</li>
               <li>Distance from Earth: ${json[0].distance}</li>
               <li>Number of Moons: ${json[0].moons}</li>
            </ol>
            <img src="${json[0].image}">`
         });
      });

   });
});