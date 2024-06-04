import React from 'react'

function VideoCustom() {
    var video = document.getElementById('video');
  console.log(video)
  
  var videoSrc = 'https://10407a55ad3.vws.vegacdn.vn/live/_definst_/stream_9_3cc1894f/playlist.m3u8';
  if (Hls.isSupported()) {
    var hls = new Hls();
    hls.loadSource(videoSrc);
    hls.attachMedia(video);
  }
  
  else if (video.canPlayType('application/vnd.apple.mpegurl')) {
    video.src = videoSrc;
  }
  return (
    <div>
        
    </div>
  )
}

export default VideoCustom