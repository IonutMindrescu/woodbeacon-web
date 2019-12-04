WB = window.WB || {};

WB.Utils = WB.Utils || {};
let audioPlay = null,
    audioStatus = false;

WB.Utils = {
    /**
    * Play audio stream using source url
    * @param soundURL - url of the source
    * */
    playAlert: function (soundURL) {
        if (audioStatus === false) {
            audioPlay = new Audio(soundURL);
        }
        audioStatus = true;
        audioPlay.loop = true;
        return audioPlay.play();
    },

    /**
     * Stop the current audio play
     * */
    stopAlert: function () {
        audioPlay.currentTime = 0;
        audioPlay.pause();
    },

    /**
     * Attach datatable for alerts
     * */
    createDataTables: function () {
        $('#alerts-table').DataTable({
            "paging": true,
            "lengthChange": true,
            "pageLength": 17,
            "searching": true,
            "ordering": true,
            "info": true,
            "autoWidth": false,
        });
    }
};
