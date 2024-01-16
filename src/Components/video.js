import React, { useEffect } from 'react';

const VideoPlayer = () => {
  useEffect(() => {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';

    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    let player;

    window.onYouTubeIframeAPIReady = () => {
      player = new window.YT.Player('youtube-player', {
        videoId: 'cCABvZJraUI',
        playerVars: {
          autoplay: 0,
          controls: 1,
          modestbranding: 1,
          rel: 0,
          showinfo: 0,
          playsinline: 1,
          // Add width and height properties to make the video player responsive
          width: '100%',
          height: '100%',
        },
        events: {
          onReady: onPlayerReady,
        },
      });
    };

    const onPlayerReady = (event) => {
    //   event.target.playVideo();
    };

    return () => {
      player.destroy();
    };
  }, []);

  return (
    <div style={{position: 'relative', paddingBottom: '56.25%', height: 0}}>
      <div id="youtube-player" style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}}></div>
    </div>
  );
};

export default VideoPlayer;
