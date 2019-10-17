(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./resources/js/elements/events/WB.Event.Alert.js":
/*!********************************************************!*\
  !*** ./resources/js/elements/events/WB.Events.Alert.js ***!
  \********************************************************/
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
        WB.Utils.playAlert('/public/sounds/alert.mp3');
      });
    }
  };
  $(document).ready(function () {
    jsPackLoader.init();
  });
})($);

/***/ })

}]);