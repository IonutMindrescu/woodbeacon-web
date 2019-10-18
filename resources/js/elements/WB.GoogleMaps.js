/*
* Google Maps - Load the map from the Alerts page
*
* */
WB = window.WB || {};

WB.GoogleMaps = WB.GoogleMaps || {};

(function() {
    WB.GoogleMaps = {
        init: function () {
            let mapMarkers = {};
            this.gMap = this.googleMaps();
            this.initListeners();
            //WB.GoogleMaps.attachMarker();
        },

        initListeners: function() {
            // card alert
            $('.card-alert').on('click', (e) => {
                let element = $(e.currentTarget).data('json');
                WB.GoogleMaps.panToLocation(element.lat, element.lng);
            });

            //
        },

        panToLocation: function(lat, lng) {
            //this.gMap.panTo(new google.maps.LatLng(lat, lng));
            this.gMap.setZoom(20);
            WB.GoogleMaps.attachMarker(lat, lng);
            this.gMap.setCenter(new google.maps.LatLng(lat, lng));
        },

        attachMarker: function(lat, lng) {

            if (this.mapMarkers.length !== 0) {
                this.mapMarkers.setMap(null);
            }

            this.mapMarkers = new google.maps.Marker({
                    position: new google.maps.LatLng(lat, lng),
                    map: this.gMap}),
                infowindow = new google.maps.InfoWindow({
                    content: 'Activitate neobisnuita detectata in parcela: 128'
                });
            infowindow.open(this.gMap, gMarker);
        },

        googleMaps: function() {
            if ($('#js-google-maps').length) {
                let marker = {},
                    infowindow = {},
                    candidates = {},
                    $map = $('#js-google-maps');

                let gMap = new google.maps.Map($map[0], {
                    center: {lat: 47.639944, lng: 26.259346},
                    zoom: 19
                });

                let gmapLayer = new google.maps.KmlLayer({
                    url: 'http://www.google.com/maps/d/u/0/kml?forcekml=1&mid=1Rxn5g-mTdlG3m--s7DeSAzUm2wrT4tWm&lid=bunKi_v7Wtc',
                    suppressInfoWindows: true,
                    preserveViewport: true,
                    clickable: true,
                    map: gMap
                });

                /*gmapLayer.addListener('click', (event) => {
                    let marker = new google.maps.Marker({
                        position: event.latLng,
                        map: gMap
                    });
                    console.log(marker);

                    gMap.panTo(event.latLng);
                    console.log(event);
                });*/

                gMap.addListener('click', (event) => {
                    Swal.fire( "Latitude: "+event.latLng.lat()+" "+", longitude: "+event.latLng.lng() );
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
                return gMap;
            }
        },
    };

    $(document).ready(() => {
        WB.GoogleMaps.init();
    });
})($);


