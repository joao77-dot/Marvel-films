document.addEventListener("DOMContentLoaded", function() {
    var video = document.getElementById("videoPlayer");
    var playPauseBtn = document.getElementById("playPauseBtn");
    var muteBtn = document.getElementById("muteBtn");
    var fullscreenBtn = document.getElementById("fullscreenBtn");

    playPauseBtn.addEventListener("click", function() {
        if (video.paused) {
            video.play();
            playPauseBtn.textContent = "Pause";
        } else {
            video.pause();
            playPauseBtn.textContent = "Play";
        }
    });

    muteBtn.addEventListener("click", function() {
        video.muted = !video.muted;
        muteBtn.textContent = video.muted ? "Unmute" : "Mute";
    });

    fullscreenBtn.addEventListener("click", function() {
        if (video.requestFullscreen) {
            video.requestFullscreen();
        } else if (video.mozRequestFullScreen) {
            video.mozRequestFullScreen();
        } else if (video.webkitRequestFullscreen) {
            video.webkitRequestFullscreen();
        } else if (video.msRequestFullscreen) {
            video.msRequestFullscreen();
        }
    });
});
