mapboxgl.accessToken = mapToken;

let lng = listing.geometry.coordinates[0];
let lt = listing.geometry.coordinates[1];

const map = new mapboxgl.Map({
    container: "map",
    style : "mapbox://styles/mapbox/streets-v12",
    center: [lng, lt],
    zoom: 9,
});

const marker = new mapboxgl.Marker({ color: "red"})
.setLngLat([lng, lt])
.setPopup(new mapboxgl.Popup({offset: 25, closeButton: false, closeOnClick: false})
.setHTML(`<p>Exact Location will be provided after Booking</p>`))
.addTo(map);

