import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Login from './pages/login/Login';
import Player from './pages/player/Player';

import { getTokenFromUrl } from './components/utilities';
import SpotifyWebApi from 'spotify-web-api-js';

import { useStateProviderValue } from './state/state-provider';
import { ACTION } from './constants';

import './App.scss';

const spotify = new SpotifyWebApi();

function App() {
  const [{ token }, dispatch] = useStateProviderValue();

  useEffect(() => {
    console.log('triggered app use effect');
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
    }
  }, [token, dispatch]);

  return (
    <Router>
      <div className="Root">
        {!token ? (
          <Login />
        ) : (
          <div className="App">
            <Player spotify={spotify} />
          </div>
        )}
      </div>
    </Router>
  );
}

export default App;
