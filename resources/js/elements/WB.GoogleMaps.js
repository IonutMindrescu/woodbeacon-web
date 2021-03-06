/*
* Google Maps - Load the map from the Alerts page
*
* */
WB = window.WB || {};

WB.GoogleMaps = WB.GoogleMaps || {};

(function() {
    WB.GoogleMaps = {
        init: function () {
            this.mapMarker = null;
            this.deviceMarker = null;
            this.gMap = this.googleMaps();
            this.gmapLayer = null;
            this.infowindow = null;
            this.initListeners();
            WB.Utils.createDataTables();

            WB.GoogleMaps.attachDeviceMarker(47.64016888079212, 26.25917762769484);
            //WB.GoogleMaps.attachMarker();
        },

        initListeners: function() {
            $(document).find('.card-alert').off('click').on('click', (e) => {
                let element = $(e.currentTarget).data('json');
                WB.GoogleMaps.panToLocation(element.lat, element.lng, element.location);
            });

            $(document).find('.js-device-location').off('click').on('click', (e) => {
                WB.GoogleMaps.panToLocation(47.64016888079212, 26.25917762769484, '', false);
            });
        },

        panToLocation: function(lat, lng, location, marker = true) {
            this.gMap.panTo(new google.maps.LatLng(lat, lng));
            this.gMap.setZoom(20);
            this.gMap.setCenter(new google.maps.LatLng(lat, lng));

            if (marker === true) {
                WB.GoogleMaps.attachMarker(lat, lng, location);
            }
        },

        attachMarker: function(lat, lng, location) {
            if (this.mapMarker !== null) {
                this.mapMarker.setMap(null);
            }
            this.mapMarker = new google.maps.Marker({
                position: new google.maps.LatLng(lat, lng),
                icon: '/images/marker-tree.png',
                animation: google.maps.Animation.BOUNCE,
                map: this.gMap
            });
            this.infowindow = new google.maps.InfoWindow({
                content: `
                    <center>
                        <b>Alerta!</b><br/>Activitate neobisnuita detectata in parcela: <b>${location}</b></br>
                        <b>Coordonate:</b> ${lat}, ${lng}</b></br>
                        <b>Device:</b> Wood Beacon</br>
                        <b>Sunet:</b> drujba
                    </center>
                `,
                pixelOffset: new google.maps.Size(0, -20)
            });
            this.infowindow.open(this.gMap, this.mapMarker);
        },

        attachDeviceMarker: function(lat, lng) {
            this.deviceMarker = new google.maps.Marker({
                position: new google.maps.LatLng(lat, lng),
                icon: '/images/wbmapdevice.png',
                map: this.gMap
            });
        },

        googleMaps: function() {
            let $map = $('#js-google-maps');

            if ($map.length) {
                let gMap = new google.maps.Map($map[0], {
                    center: {lat: 47.639944, lng: 26.259346},
                    zoom: 19
                });

                this.gmapLayer = new google.maps.KmlLayer({
                    url: 'http://www.google.com/maps/d/u/0/kml?forcekml=1&mid=1Rxn5g-mTdlG3m--s7DeSAzUm2wrT4tWm&lid=bunKi_v7Wtc',
                    suppressInfoWindows: true,
                    preserveViewport: true,
                    screenOverlays: true,
                    clickable: true,
                    map: gMap
                });

                this.gmapLayer.addListener('click', (event) => {
                    console.log(event);
                });
                return gMap;
            }
        },
    };

    $(document).ready(() => {
        WB.GoogleMaps.init();
    });
})($);


