document.addEventListener("DOMContentLoaded", function() {
   video1 = new Moovie({
      selector: "#example1",
      config: {
          controls : {
              playtime : true,
              mute : true,
              volume : true,
              subtitles : true,
              config : true,
              fullscreen : true,
              submenuCaptions : true,
              submenuOffset : true,
              submenuSpeed : true,
              allowLocalSubtitles : true
          }
      }
   });
});


