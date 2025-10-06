var map = L.map('mapa').setView([-17.395714,-66.158094], 18);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var marker = L.marker([-17.395714,-66.158094]).addTo(map);

marker.bindPopup("Cobra Kids").openPopup();