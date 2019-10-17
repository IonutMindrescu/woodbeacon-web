WB = window.WB || {};

WB.Utils = MG.Utils || {};

WB.Utils = {

    /**
    * Play audio stream using source url
    * @param soundURL - url of the source
    * */
    playAlert: function (soundURL) {
        let audioPlay = new Audio(soundURL);
        return audioPlay.play();
    }
};