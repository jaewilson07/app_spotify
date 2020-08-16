import React, { useEffect } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';

import Login from './login/login';
import Player from './player/player';
import { getTokenFromUrl } from '../components/utilities';
import { ACTION } from '../constants';

import { useStateProviderValue } from '../state/state-provider';

const spotify = new SpotifyWebApi();

function App() {
  const [{ token }, dispatch] = useStateProviderValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = '';

    const _token = hash.access_token;

    if (_token) {
      dispatch({
        type: ACTION.SET_TOKEN,
        token: _token,
      });

      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {
        dispatch({
          type: ACTION.SET_USER,
          user,
        });
      });

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: ACTION.SET_PLAYLIST,
          playlists,
        });
      });

      // discover weekly
      spotify.getPlaylist('37i9dQZEVXcNKOau4KpgZW').then((discover_weekly) => {
        console.log(discover_weekly);
        dispatch({
          type: ACTION.SET_DISCOVER_WEEKLY,
          discover_weekly: discover_weekly,
        });
      });
    }
  });

  return (
    <div className="App">
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App;
