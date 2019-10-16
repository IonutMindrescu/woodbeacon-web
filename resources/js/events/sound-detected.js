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
            });

            let channel = pusher.subscribe('alerts-channel');
            channel.bind('sound-detected', function (data) {
                alert(JSON.stringify(data));
                this.playAlert('/public/sounds/alert.mp3');
            });
        },
        playAlert: function (soundURL) {
            let audioPlay = {};
            audioPlay['source'] = new Audio();
            audioPlay['source'].src = soundURL;

            audioPlay['source'].addEventListener('load', function () {
                audioPlay['source'].play();
            });
        }
    };

    $(document).ready(() => {
        jsPackLoader.init();
    });
})($);