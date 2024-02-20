var video = document.createElement('video');
video.src = "https://player.vimeo.com/progressive_redirect/playback/769653111/rendition/1080p/file.mp4?loc=external&signature=ed68edc6f93d6322ab788f73a6c328d62ef27555627cc8b2c6a85fdaf8e4c696"; 
video.controls = false; 
video.autoplay = true; 
video.muted = true;

var topvideo = document.getElementById('topvideo');
topvideo.appendChild(video);
// Scroll to specific values
// scrollTo is the same
window.scroll({
    top: 2500, 
    left: 0, 
    behavior: 'smooth'
  });
  
  // Scroll certain amounts from current position 
  window.scrollBy({ 
    top: 100, // could be negative value
    left: 0, 
    behavior: 'smooth' 
  });

  function redirectToIndex2(){
    window.location.href='About_dlc.html';
  }

  function redirectToIndex3(){
    window.location.href='Ourworld.html';
  }
  function redirectToIndex4(){
    window.location.href='Experence.html';
  }