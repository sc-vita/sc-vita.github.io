(function($) {
    const myLatLng = new google.maps.LatLng(-28.7498764, -49.4573862);

    const mapOptions = {
        zoom: 16,
        center: myLatLng,
        mapTypeControlOptions: {
            mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'roadatlas']
        }
    };
    const map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);
        
    const marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: '',
        icon: 'http://scvita.com/img/1.png',
    });
})(window.JQuery)