var map;

function initMap() {

    console.log('init map');

    map = new google.maps.Map(document.getElementById('map'),{
        center: {
            lat: 40.4148002,
            lng: -3.7050879
        },
        zoom: 15,
    });

    var madridCentralCoords = [
      {lat: 40.407114,lng: -3.711907},
      {lat: 40.408790,lng: -3.713249},
      {lat: 40.410644,lng: -3.713989},
      {lat: 40.421500,lng: -3.712798},
      {lat: 40.421957,lng: -3.703067},
      {lat: 40.416809,lng: -3.696786}
    ];
    var madridCentralPolygon = new google.maps.Polygon({
        paths: madridCentralCoords,
        strokeColor: '#FF0000',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#FF0000',
        fillOpacity: 0.30
    });
    madridCentralPolygon.setMap(map);
}
