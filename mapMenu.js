function showContextMenu(map, currentLatLng) {
	var projection;
	var contextmenuDir;

	projection = map.getProjection() ;

	$('.context-menu').remove();
	contextmenuDir = document.createElement("div");
	contextmenuDir.className  = 'context-menu';
	contextmenuDir.innerHTML = '<a id="menu1"><div class="context">Where is this?<\/div><\/a>';
	
	$(map.getDiv()).append(contextmenuDir);
	setMenuXY(map, currentLatLng);
	contextmenuDir.style.visibility = "visible";
}

function getCanvasXY(map, currentLatLng){
  var scale = Math.pow(2, map.getZoom());
  var nw = new google.maps.LatLng(
      map.getBounds().getNorthEast().lat(),
      map.getBounds().getSouthWest().lng()
  );
  var worldCoordinateNW = map.getProjection().fromLatLngToPoint(nw);
  var worldCoordinate = map.getProjection().fromLatLngToPoint(currentLatLng);
  var currentLatLngOffset = new google.maps.Point(
      Math.floor((worldCoordinate.x - worldCoordinateNW.x) * scale),
      Math.floor((worldCoordinate.y - worldCoordinateNW.y) * scale)
  );
  return currentLatLngOffset;
}

function setMenuXY(map, currentLatLng){
	var mapWidth = $('#google-map').width();
	var mapHeight = $('#google-map').height();
	var menuWidth = $('.context-menu').width();
	var menuHeight = $('.context-menu').height();
	var clickedPosition = getCanvasXY(map, currentLatLng);
	var x = clickedPosition.x ;
	var y = clickedPosition.y ;

	if((mapWidth - x ) < menuWidth)//if too close to the map border, decrease x position
	    x = x - menuWidth;
	if((mapHeight - y ) < menuHeight)//if too close to the map border, decrease y position
	   y = y - menuHeight;

	$('.context-menu').css('left',x  );
	$('.context-menu').css('top',y );
};