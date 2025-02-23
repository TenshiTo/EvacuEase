var map = L.map('map', {
    center: [14.5995, 120.9842], // Example: Manila Coordinates
    zoom: 10,
    scrollWheelZoom: false, // Disable default zoom on scroll
    touchZoom: false, // Disable pinch zoom on mobile
}).setView([14.726825006446694, 121.06651792019144], 16); // Use your specific coordinates

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    minZoom: 15
}).addTo(map);

function enableZoom(e) {
    if (e.ctrlKey) {
        map.scrollWheelZoom.enable();
    } else {
        map.scrollWheelZoom.disable();
    }
}

document.addEventListener('keydown', function (e) {
    if (e.key === 'Control') {
        map.scrollWheelZoom.enable();
    }
});

document.addEventListener('keyup', function (e) {
    if (e.key === 'Control') {
        map.scrollWheelZoom.disable();
    }
});

map.on('mousemove', enableZoom);
map.on('mousedown', enableZoom);
map.on('mouseup', enableZoom);

var customIcon = L.icon({
    iconUrl: 'styles/main_styles/img/marker/Lagropin.png',
    iconSize: [70, 85],
    iconAnchor: [19, 50],
    popupAnchor: [0, -50]
});
var customIcon2 = L.icon({
    iconUrl: 'styles/main_styles/img/marker/centipin.png',
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

document.getElementById("toggleArrow").addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default anchor behavior
    const arrow = this.querySelector(".arrow");
    arrow.classList.toggle("rotated");
});

document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("toggleArrow");
    const locs = document.getElementById("locs");

    toggleButton.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent default anchor behavior
        locs.classList.toggle("visible");

        if (locs.classList.contains("visible")) {
            locs.style.transform = "translateY(0)";
            locs.style.opacity = "1";
        } else {
            locs.style.transform = "translateY(-20px)";
            locs.style.opacity = "0";
        }
    });
    document.addEventListener("click", handleClickOutside);
});

function handleClickOutside(event) {
    const sidebar = document.querySelector('#locs');
    const menuButton = document.querySelector('#toggleArrow');
    if (!sidebar.contains(event.target) && !menuButton.contains(event.target)) {
        document.getElementById("locs").classList.remove("visible");
        document.getElementById("locs").classList.remove("visible");
        document.querySelector("#toggleArrow .arrow").classList.remove("rotated");
    }
}

// Add tooltip for Ctrl + Scroll to zoom
var tooltip = L.control({ position: 'topright' });

tooltip.onAdd = function (map) {
    var div = L.DomUtil.create('div', 'ctrl-zoom-tooltip');
    div.innerHTML = 'Hold <b>Ctrl</b> + Scroll to zoom';
    div.style.backgroundColor = 'white';
    div.style.padding = '5px';
    div.style.borderRadius = '5px';
    div.style.boxShadow = '0 0 15px rgba(0,0,0,0.2)';
    div.style.display = 'none'; // Initially hidden
    return div;
};

tooltip.addTo(map);

map.on('mouseover', function () {
    document.querySelector('.ctrl-zoom-tooltip').style.display = 'block';
});

map.on('mouseout', function () {
    document.querySelector('.ctrl-zoom-tooltip').style.display = 'none';
});
