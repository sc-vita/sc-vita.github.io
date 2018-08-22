(function($) {
    const myLatLng = new google.maps.LatLng(-28.9419717,-49.4982779);

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
        icon: 'https://scvita.com.br/img/pointer.png',
    });
})(window.JQuery)