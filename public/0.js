(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./resources/js/elements/WB.Utils.js":
/*!*******************************************!*\
  !*** ./resources/js/elements/WB.Utils.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

WB.Utils = {
  /**
  * Play audio stream using source url
  * @param soundURL - url of the source
  * */
  playAlert: function playAlert(soundURL) {
    var audioPlay = new Audio(soundURL);
    return audioPlay.play();
  }
};

/***/ })

}]);