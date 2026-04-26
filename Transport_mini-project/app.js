// Load existing data
let loads = JSON.parse(localStorage.getItem("loads")) || [];

// Add Load
function addLoad() {
let type = document.getElementById("type").value.trim();
let weight = document.getElementById("weight").value.trim();
let location = document.getElementById("location").value.trim();
let contact = document.getElementById("contact").value.trim();

if (!type || !weight || !location || !contact) {
alert("Please fill all fields");
return;
}

let load = { type, weight, location, contact };
loads.push(load);

localStorage.setItem("loads", JSON.stringify(loads));

clearInputs();
displayLoads();
}

// Display Loads
function displayLoads() {
let list = document.getElementById("loadList");
list.innerHTML = "";

if (loads.length === 0) {
list.innerHTML = "<p>No loads available</p>";
return;
}

loads.forEach((load, index) => {
let div = document.createElement("div");
div.className = "load";

div.innerHTML = `
  <p><b>Type:</b> ${load.type}</p>
  <p><b>Weight:</b> ${load.weight}</p>
  <p><b>Location:</b> ${load.location}</p>
  <button onclick="acceptLoad(${index})">Accept</button>
  <button onclick="deleteLoad(${index})" style="background:red;">Delete</button>
`;

list.appendChild(div);

});
}

// Accept Load
function acceptLoad(index) {
let load = loads[index];
alert("Contact this person: " + load.contact);
}

// Delete Load
function deleteLoad(index) {
if (confirm("Are you sure to delete this load?")) {
loads.splice(index, 1);
localStorage.setItem("loads", JSON.stringify(loads));
displayLoads();
}
}

// Clear Inputs
function clearInputs() {
document.getElementById("type").value = "";
document.getElementById("weight").value = "";
document.getElementById("location").value = "";
document.getElementById("contact").value = "";
}

// Initial Load
displayLoads();