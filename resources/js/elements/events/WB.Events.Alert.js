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

            channel.bind('sound-detected', (data) => {
                Swal.fire('Alerta!', 'A fost detectata o activitate neobisnuita! ' + data, 'error');

                WB.Utils.playAlert('/sounds/alert.mp3');
            });
        },
    };

    $(document).ready(() => {
        jsPackLoader.init();
    });
})($);
