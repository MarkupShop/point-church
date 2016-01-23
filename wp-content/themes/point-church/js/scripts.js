$(document).ready(function(){

// get the value of the bottom of the #intro element by adding the offset of that element plus its height, set it as a variable
var introbottom = $('body').offset().top;


if( $(window).scrollTop() > introbottom ){
	$('header').addClass('past-intro');
}
// on scroll, 
$(window).on('scroll',function(){

    // we round here to reduce a little workload
    stop = Math.round($(window).scrollTop());
    if (stop > introbottom) {
        $('header').addClass('past-intro');
    } else {
        $('header').removeClass('past-intro');
    }

});

function buildHomepageMap(){
	
	var map;
	
	var MY_MAPTYPE_ID = 'homepage_map';
	
	function initialize() {
	
	  var featureOpts = [
	    {
	      stylers: [
	        { hue: '#000000' },
	        { saturation: -100 },
	        { lightness: -10 },
	        { visibility: 'simplified' },
	        { gamma: 0.5 },
	        { weight: 0.5 },
	        { invert_lightness: true }
	
	      ]
	    },
	    {
	      elementType: 'labels',
	      stylers: [
	        { visibilty: "off" }
	      ]
	    },
	    {
	      featureType: 'water',
	      stylers: [
	        { color: '#333333' }
	      ]
	    },
	    {
	    	featureType: "road",
	    	elementType: "labels",
	    	stylers: [
	      		{ visibility: "off" }
	    	]
	    },
	    {
	    	featureType: "poi",
	    	elementType: "labels",
	    	stylers: [
	    		{ visibility: "off" }
	    	]
	    }	
	  ];
	
	  var mapOptions = {
	    zoom: 12,
	    mapTypeControlOptions: {
	      mapTypeIds: [google.maps.MapTypeId.ROADMAP, MY_MAPTYPE_ID]
	    },
	    mapTypeId: MY_MAPTYPE_ID,
	    scrollwheel: false
	  };
	
	  map = new google.maps.Map(document.getElementById('map-canvas'),
	      mapOptions);
	
	  var styledMapOptions = {
	    name: 'The Point Church'
	  };
	
	  var customMapType = new google.maps.StyledMapType(featureOpts, styledMapOptions);
	
	  map.mapTypes.set(MY_MAPTYPE_ID, customMapType);
	
	  var image = 'wp-content/themes/point-church/images/piont-church-marker.png';
	
	  var apex = new google.maps.Marker({
	      position: new google.maps.LatLng( 35.712722, -78.840252 ),
	      map: map,
	      title: 'Apex Campus',
	      icon: image
	  });
	
	  var apexContent = '<div id="map-info">'+
	      '<h4 class="campus-name">Apex Campus<h4>'+
	      '<p class="address">1402 E Williams St, Apex, NC 27539</p>'+
	      '</div>';
	
	  var apexInfo = new google.maps.InfoWindow({
	      content: apexContent
	  });
	
	  var raleigh = new google.maps.Marker({
	      position: new google.maps.LatLng( 35.77959, -78.67595 ),
	      map: map,
	      title: 'Raleigh Campus',
	      icon: image
	  });
	
	  var raleighContent = '<div id="map-info">'+
	      '<h4 class="campus-name">Raleigh Campus<h4>'+
	      '<p class="address">2109 Avent Ferry Rd, Raleigh, NC 27606</p>'+
	      '</div>';
	
	  var raleighInfo = new google.maps.InfoWindow({
	      content: raleighContent
	  });
	
	  var cary = new google.maps.Marker({
	      position: new google.maps.LatLng( 35.764780, -78.751460 ),
	      map: map,
	      title: 'Cary Campus',
	      icon: image
	  });
	
	  var caryContent = '<div id="map-info">'+
	      '<h4 class="campus-name">Cary Campus<h4>'+
	      '<p class="address">1503 Walnut St, Cary, NC 27511</p>'+
	      '</div>';
	
	  var caryInfo = new google.maps.InfoWindow({
	      content: caryContent
	  });
	
	  google.maps.event.addListener(apex, 'click', function() {
	    apexInfo.open(map,apex);
	  });
	
	  google.maps.event.addListener(raleigh, 'click', function() {
	    raleighInfo.open(map,raleigh);
	  });
	
	  google.maps.event.addListener(cary, 'click', function() {
	    caryInfo.open(map,cary);
	  });
	
	
	}
	
	google.maps.event.addDomListener(window, 'load', initialize);

	function revealMap(){

		$('#map-expand').on('click',function(){

			$('#map-canvas').toggleClass('expand');
			google.maps.event.trigger(map, 'resize');
    		var center = new google.maps.LatLng(35.7400373, -78.7202436);
			map.panTo(center);
			return false;

		});

	}

	revealMap();

	
}


function buildCampusMap(){
	
	var map;
	
	var MY_MAPTYPE_ID = 'campus_map';
	
	function initialize() {

	  var lat = $('#map-canvas').data('lat');
	  var lng = $('#map-canvas').data('lng');

	  // for cary : 35.7688008,-78.745

	  var myLatlng = new google.maps.LatLng( lat , lng);
	
	  var featureOpts = [
	    {
	      stylers: [
	        { hue: '#000000' },
	        { saturation: -100 },
	        { lightness: -10 },
	        { visibility: 'simplified' },
	        { gamma: 0.5 },
	        { weight: 0.5 },
	        { invert_lightness: true }
	
	      ]
	    },
	    {
	      elementType: 'labels',
	      stylers: [
	      //  { //visibilty: "off" }
	      ]
	    },
	    {
	      featureType: 'water',
	      stylers: [
	        { color: '#333333' }
	      ]
	    },
	    {
	    	featureType: "road",
	    	elementType: "labels",
	    	stylers: [
	      	//	{ visibility: "off" }
	    	]
	    },
	    {
	    	featureType: "poi",
	    	elementType: "labels",
	    	stylers: [
	    		{ visibility: "off" }
	    	]
	    }	
	  ];
	
	  var mapOptions = {
	    zoom: 12,
	    mapTypeControlOptions: {
	      mapTypeIds: [google.maps.MapTypeId.ROADMAP, MY_MAPTYPE_ID]
	    },
	    mapTypeId: MY_MAPTYPE_ID,
	    scrollwheel: false,
	    center: myLatlng
	  };
	
	  map = new google.maps.Map(document.getElementById('map-canvas'),
	      mapOptions);
	
	  var styledMapOptions = {
	    name: 'The Point Church'
	  };
	
	  var customMapType = new google.maps.StyledMapType(featureOpts, styledMapOptions);
	
	  map.mapTypes.set(MY_MAPTYPE_ID, customMapType);
	
	  var image = '/point-church/wp-content/themes/point-church/images/piont-church-marker.png';
	
	  var location = new google.maps.Marker({
	      position: new google.maps.LatLng( lat, lng ),
	      map: map,
	      title: 'Cary Campus',
	      icon: image
	  });
	
	}
	
	google.maps.event.addDomListener(window, 'load', initialize);
	
}

function operateMenu(){

	if( $('.off-canvas').hasClass('open') ){
		$('.off-canvas').removeClass('open');
		$('body').removeClass('off-canvas-open');
	}else{
		$('.off-canvas').addClass('open');
		$('body').addClass('off-canvas-open');
	}

}




if($('body').hasClass('home')){ buildHomepageMap(); }
if($('body').hasClass('locations')){ buildCampusMap(); }
//if($('body').hasClass('events')){ buildEventsMap(); }
$('.off-canvas-control, .off-canvas-click-blocker').click(function(){
	event.preventDefault();
	operateMenu();
}); //controller for mobile nav


});