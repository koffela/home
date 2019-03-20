// 1. The basic part of the example

var L;



window.onload = function() {

  L.mapquest.key = 'U50pNzvv4NqgBVNCzMZKoTt5I8GKHlU1';
  
  



  // 'map' refers to a <div> element with the ID map

  var map = L.mapquest.map('map', {
    
    center: [44.56503, -123.26351],
    
    layers: L.mapquest.tileLayer('map'),

    zoom: 12

  });

  map.addControl(L.mapquest.control({ position: 'bottomright' }));
  L.marker([44.583336, -123.260958], {
    icon: L.mapquest.icons.marker({
      primaryColor: '#22407F',
      secondaryColor: '#3B5998',
      shadow: true,
      size: 'md',
      symbol: 'A'
    })
  })
  .bindPopup('This is where I made the Stellar Forge video!')
  .addTo(map);

}