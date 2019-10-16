/*
* Google Maps - Load the map from the Alerts page
*
* */
(function() {
    const jsPackLoader = {
        init: function () {
            this.googleMaps();
        },

        googleMaps: function() {
            if ($('.js-google-maps').length) {
                let marker = {},
                    infowindow = {},
                    candidates = {},
                    $map = $('.js-google-maps');

                let gMap = new google.maps.Map($map[0], {
                    center: {
                        lat: 45.937387, lng: 24.851998,
                    },
                    zoom: 7
                });

/*                $.each(json_housings, function(index, item){
                    console.log(item);

                    candidates[index] = '';
                    $.each(item.candidates, function(c_index, c_item){
                        candidates[index] += c_item.nume +' - '+ c_item.telefon +'<br/>';
                    });

                    /!* Create Infoxbox for marker *!/
                    infowindow[index] = new google.maps.InfoWindow({
                        content: '<b style="color: orange;">'+ item.name +'</b><br/>' +
                            '<b>Client:</b> '+ item.client.nume +'<br/>' +
                            '<b>Adresa:</b> '+ item.address +'<br/>' +
                            '<b>Total Locuri:</b> '+ item.slots +' <b style="color: forestgreen;">Disponibile:</b> '+ (item.slots - item.candidates.length) +'</b> <b style="color: red;">Ocupate:</b> '+ item.candidates.length +'<br/><br/>' +
                            '<b>Angajati ('+ item.candidates.length +')</b><br/>' + candidates[index],
                    });
                    /!* Create Marker on Map *!/
                    marker[index] = new google.maps.Marker({
                        position: {
                            lat: item.latitude,
                            lng: item.longitude,
                        },
                        icon: window.location.origin + '/img/pensiune.png',
                        map
                    });
                    /!* Add listener for click action *!/
                    marker[index].addListener('click', function() {
                        infowindow[index].open(map, marker[index]);
                    });
                });*/
            }
        },
    };

    $(document).ready(() => {
        jsPackLoader.init();
    });
})($);


