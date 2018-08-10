 /*map*/
 function init_map() {
    var myOptions = { zoom: 9, center: new google.maps.LatLng(34.838315, 10.755036), mapTypeId: google.maps.MapTypeId.ROADMAP, streetViewControl: false }; 
    let map = new google.maps.Map(document.getElementById('gmap_canvas'), myOptions); 
    let marker = new google.maps.Marker({ map: map, position: new google.maps.LatLng(34.838315, 10.755036) });
    let infowindow = new google.maps.InfoWindow({ content: '<strong>Title</strong><br>Sfax,ENET"COM <br>' });
    google.maps.event.addListener(marker, 'click', function () { infowindow.open(map, marker); }); infowindow.open(map, marker);
  } 
  google.maps.event.addDomListener(window, 'load', init_map);
  /*hid*/
  $(document).ready(function(){
    $(".btn1").click(function(){
        $("#mappe").hide(1000);
    });
   
  });
  /*show*/
  $(document).ready(function(){
    $(".btn2").click(function(){
        $("#mappe").show(1000);
    });
   
  });