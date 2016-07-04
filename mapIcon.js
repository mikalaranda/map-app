//Columbus Circle: 40.768645, -73.983392
//Inwood Park: 40.8683489,-73.9255755
//Belvedere Castle: 40.779463, -73.969250

function addMapIcon(mapIcon, map) {
  var markerImage = './images/butterfly_icon.png';

  var marker = new google.maps.Marker({
    position: {lat: mapIcon.coordinates.lat, lng: mapIcon.coordinates.long},
    map: map,
    icon: markerImage
  });

  marker.addListener('click', function() {
    $('.current-photo').attr("src", mapIcon.photo);
    $('.caption-text')[0].innerHTML = mapIcon.caption;
    $('.description-text')[0].innerHTML = mapIcon.description;
  });
}