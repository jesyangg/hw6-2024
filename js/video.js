var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});



window.addEventListener('DOMContentLoaded', function() {
  // Get the video element
  var video = document.getElementById('player1');
  video.autoplay = false;
  video.loop = false;


  // Get the buttons and other elements
  var playButton = document.getElementById('play');
  var pauseButton = document.getElementById('pause');
  var slowerButton = document.getElementById('slower');
  var fasterButton = document.getElementById('faster');
  var skipButton = document.getElementById('skip');
  var muteButton = document.getElementById('mute');
  var volumeSlider = document.getElementById('slider');
  var volumeDisplay = document.getElementById('volume');
  var vintageButton = document.getElementById('vintage');
  var originalButton = document.getElementById('orig');


  
  // Add event listeners to buttons, etc.
  playButton.addEventListener('click', function() {
      video.play();
  });

  pauseButton.addEventListener('click', function() {
      video.pause();
  });

  slowerButton.addEventListener('click', function() {
      video.playbackRate -= 0.10;
      console.log("Video speed decreased to: " + video.playbackRate + "x");
  });

  fasterButton.addEventListener('click', function() {
      video.playbackRate += 0.10;
      console.log("Video speed increased to: " + video.playbackRate + "x");

  });

  skipButton.addEventListener('click', function() {
    var newTime = video.currentTime + 10;
 
    // Check if new time exceeds video length
    if (newTime >= video.duration) {
        // If exceeded, reset to start of the video
        video.currentTime = 0;
      
    } else {
        // If not exceeded, skip ahead
        video.currentTime = newTime;
    }

 // Log the current location of the video
 console.log("Current video time: " + video.currentTime + " seconds");

});

  muteButton.addEventListener('click', function() {
      video.muted = !video.muted; // Toggle mute
  });

  volumeSlider.addEventListener('input', function() {
      video.volume = this.value / 100; // Convert slider value to a fraction
      volumeDisplay.textContent = this.value + '%';
  });

  vintageButton.addEventListener('click', function() {
      video.className += " oldSchool";
  });

  originalButton.addEventListener('click', function() {
      video.className = video.className.replace(/\boldSchool\b/g, "");
  });

  // Other initialization code if needed
});