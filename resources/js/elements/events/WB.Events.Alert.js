/*
* This event will listen for Sound Detected - Forest Environment
*
* */

(function() {
    const jsPackLoader = {
        init: function () {
            this.soundDetected();
        },

        soundDetected: function () {
            Pusher.logToConsole = true;

            let pusher = new Pusher('406a05c4895ed986ff7a', {
                    cluster: 'eu',
                    forceTLS: true
                }),
                channel = pusher.subscribe('alerts-channel');

            channel.bind('device-alert', (data) => {
                let aData = data.message;
                console.log(aData);

                switch (aData.action) {
                    case 'sound-detected':
                        Swal.fire({
                            title: 'Alerta!',
                            html: `A fost detectata o activitate neobisnuita!<br/>${aData.action}`,
                            type: 'warning',
                            allowOutsideClick: false,
                            showCancelButton: false,
                            confirmButtonColor: '#2ea727',
                            confirmButtonText: 'Close'
                        }).then((result) => {
                            if (result.value) {
                                // stop current alert
                                WB.Utils.stopAlert();
                                // info user about the logged alert
                                Swal.fire('Alerta!', 'Alerta a fost salvata in istoric.', 'success');
                            }
                        });

                        this.appendAlert(aData);
                        WB.GoogleMaps.panToLocation(aData.lat, aData.lng);
                        WB.Utils.playAlert('/sounds/alert.wav');
                        break;
                    case 'device-update':
                        $('.js-battery-level').html(`${aData.battery}%`);
                        break;
                    default:
                        break;
                }
            });
        },

        appendAlert: function (data) {
            let alertMarkup = `<div class="card card-alert" data-json='{"lat":"${data.lat}","lng":"${data.lng}"}'>
                <h3>#Alert - ${new Date($.now())}</h3>
                Location: <strong>${data.location}</strong><br/>
                Sound: <strong>${data.sound}</strong>
            </div>`;
            $('.js-alerts').prepend(alertMarkup);
        }
    };

    $(document).ready(() => {
        jsPackLoader.init();
    });
})($);
