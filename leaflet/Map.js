
var map = L.map('map').setView([14.726825006446694, 121.06651792019144], 16); // Use your specific coordinates

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    minZoom: 15
}).addTo(map);

var customIcon = L.icon({
    iconUrl: 'functions/Lagropin.png',
    iconSize: [70, 85],
    iconAnchor: [19, 50],
    popupAnchor: [0, -50]
});
var customIcon2 = L.icon({
    iconUrl: 'functions/centipin.png',
    iconSize: [70, 85],
    iconAnchor: [19, 50],
    popupAnchor: [0, -50]
});

var marker = L.marker([14.726825006446694, 121.06651792019144], { icon: customIcon }).addTo(map);
marker.bindPopup('<b>Lagro High School</b><br>Evacuation Center.').openPopup();

var marker2 = L.marker([14.718503620766143, 121.06598599046816], { icon: customIcon2 }).addTo(map);
marker2.bindPopup('<b>Centinnial Park</b><br>Evacuation Center.').openPopup();

var locations = [
    { name: "Lagro High School", coords: [14.726825006446694, 121.06651792019144], marker: marker },
    { name: "Centinnial Park", coords: [14.718503620766143, 121.06598599046816], marker: marker2 },
];

function goToMarker(index) {
    var marker = locations[index].marker;
    map.setView(marker.getLatLng(), 19);
    marker.openPopup();
}