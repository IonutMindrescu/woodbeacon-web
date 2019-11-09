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
                        Swal.fire('Alerta!', `A fost detectata o activitate neobisnuita! ${aData.action}`, 'error');
                        WB.Utils.playAlert('/sounds/alert.mp3');
                        break;
                    case 'device-update':
                        $('.js-battery-level').html(`${aData.battery}%`);
                        break;
                    default:
                        break;
                }
            });
        },
    };

    $(document).ready(() => {
        jsPackLoader.init();
    });
})($);
