acess_token2 = 'BQD3LyMiJkkYAlbPhHwTiZo8ENZqcKlXEm6yEBCjM-fdL-6YQlwiJ2DUr2t3n6L_plpnkXAfOekjV0ftJBfbhDJaji8mAf9CgabsXzSQzoo2pil3b_Dthi4dizTh25XhIUgRqz3le4obqJ_7f25ttaUH8svjS9tcZA';

window.onSpotifyWebPlaybackSDKReady = () => {
    const token = acess_token2;
    const player = new Spotify.Player({
      name: 'Web Playback SDK Quick Start Player',
      getOAuthToken: cb => { cb(token); }
    });
  
    // Error handling
    player.addListener('initialization_error', ({ message }) => { console.error(message); });
    player.addListener('authentication_error', ({ message }) => { console.error(message); });
    player.addListener('account_error', ({ message }) => { console.error(message); });
    player.addListener('playback_error', ({ message }) => { console.error(message); });
  
    // Playback status updates
    player.addListener('player_state_changed', state => { console.log(state); });
  
    // Ready
    player.addListener('ready', ({ device_id }) => {
      console.log('Ready with Device ID', device_id);
    });
  
    // Not Ready
    player.addListener('not_ready', ({ device_id }) => {
      console.log('Device ID has gone offline', device_id);
    });
  
    // Connect to the player!
    player.connect();
  };