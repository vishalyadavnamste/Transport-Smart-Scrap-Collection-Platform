// ===== SWITCH SECTION =====
function showSection(section) {
document.getElementById("factorySection").style.display = "none";
document.getElementById("transportSection").style.display = "none";

if (section === "factory") {
document.getElementById("factorySection").style.display = "block";
} else {
document.getElementById("transportSection").style.display = "block";
}
}

// ===== FACTORY DATA =====
let loads = JSON.parse(localStorage.getItem("loads")) || [];

function addLoad() {
let type = document.getElementById("type").value;
let weight = document.getElementById("weight").value;
let location = document.getElementById("location").value;
let price = document.getElementById("price").value;
let contact = document.getElementById("contact1").value;

if (!type || !weight || !location || !contact) {
alert("Fill required fields");
return;
}

loads.push({ type, weight, location, price, contact });
localStorage.setItem("loads", JSON.stringify(loads));

displayLoads();
}

function displayLoads() {
let list = document.getElementById("loadList");
list.innerHTML = "";

loads.forEach(load => {
let div = document.createElement("div");
div.className = "load";

div.innerHTML = `
  <p><b>Type:</b> ${load.type}</p>
  <p><b>Weight:</b> ${load.weight}</p>
  <p><b>Location:</b> ${load.location}</p>
  <p><b>Price:</b> ${load.price || "Not specified"}</p>

  <button class="call" onclick="call('${load.contact}')">📞 Call</button>
  <button class="whatsapp" onclick="whatsapp('${load.contact}')">💬 WhatsApp</button>
`;

list.appendChild(div);

});
}

// ===== TRANSPORT DATA =====
let transports = JSON.parse(localStorage.getItem("transports")) || [];

function addTransport() {
let pickup = document.getElementById("pickup").value;
let drop = document.getElementById("drop").value;
let weight = document.getElementById("tweight").value;
let material = document.getElementById("material").value;
let contact = document.getElementById("contact2").value;

if (!pickup || !drop || !weight || !material || !contact) {
alert("Fill all fields");
return;
}

transports.push({ pickup, drop, weight, material, contact });
localStorage.setItem("transports", JSON.stringify(transports));

displayTransports();
}

function displayTransports() {
let list = document.getElementById("transportList");
list.innerHTML = "";

transports.forEach(t => {
let div = document.createElement("div");
div.className = "load";

div.innerHTML = `
  <p><b>Pickup:</b> ${t.pickup}</p>
  <p><b>Drop:</b> ${t.drop}</p>
  <p><b>Weight:</b> ${t.weight}</p>
  <p><b>Material:</b> ${t.material}</p>

  <button class="call" onclick="call('${t.contact}')">📞 Call</button>
  <button class="whatsapp" onclick="whatsapp('${t.contact}')">💬 WhatsApp</button>
`;

list.appendChild(div);

});
}

// ===== COMMON FUNCTIONS =====
function call(number) {
window.location.href = "tel:" + number;
}

function whatsapp(number) {
let msg = "Hello, I am interested in your listing.";
window.open("https://wa.me/" + number + "?text=" + encodeURIComponent(msg));
}

// ===== INITIAL LOAD =====
displayLoads();
displayTransports();