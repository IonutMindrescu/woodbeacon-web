(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./resources/js/events/sound-detected.js":
/*!***********************************************!*\
  !*** ./resources/js/events/sound-detected.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
* This event will listen for Sound Detected - Forest Environment
*
* */
(function () {
  var jsPackLoader = {
    init: function init() {
      this.soundDetected();
    },
    soundDetected: function soundDetected() {
      Pusher.logToConsole = true;
      var pusher = new Pusher('406a05c4895ed986ff7a', {
        cluster: 'eu',
        forceTLS: true
      });
      var channel = pusher.subscribe('alerts-channel');
      channel.bind('sound-detected', function (data) {
        alert(JSON.stringify(data));
        this.playAlert('/public/sounds/alert.mp3');
      });
    },
    playAlert: function playAlert(soundURL) {
      var audioPlay = {};
      audioPlay['source'] = new Audio();
      audioPlay['source'].src = soundURL;
      audioPlay['source'].addEventListener('load', function () {
        audioPlay['source'].play();
      });
    }
  };
  $(document).ready(function () {
    jsPackLoader.init();
  });
})($);

/***/ })

}]);