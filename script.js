function order() {
  alert("🍪 Order placed! Fresh cookies coming soon!");
}

let ovenOn = false;

setInterval(() => {
  ovenOn = !ovenOn;
  document.getElementById("status").innerText = ovenOn ? "ON 🔥" : "OFF ❄️";
}, 3000);
