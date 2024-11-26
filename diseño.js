document.getElementById('contacto-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Gracias por tu mensaje. Nos pondremos en contacto pronto.');
});

// Mapa interactivo
function initMap() {
    const mapaDiv = document.getElementById('mapa');
    if (mapaDiv) {
        const map = new google.maps.Map(mapaDiv, {
            center: { lat: -9.527987, lng: -77.528846 },
            zoom: 8,
            styles: [
                {
                    "elementType": "geometry",
                    "stylers": [{ "color": "#212121" }]
                },
                {
                    "elementType": "labels.icon",
                    "stylers": [{ "visibility": "off" }]
                },
                {
                    "elementType": "labels.text.fill",
                    "stylers": [{ "color": "#757575" }]
                },
                {
                    "elementType": "labels.text.stroke",
                    "stylers": [{ "color": "#212121" }]
                }
            ]
        });
    }
}

// Agregar evento de clic al botón "Ver más"
const btnsVerMas = document.querySelectorAll('.btn-ver-mas');
btnsVerMas.forEach(btn => {
    btn.addEventListener('click', function(event) {
        event.preventDefault();
        const link = event.currentTarget.dataset.link;
        window.open(link, '_blank');
    });
});
