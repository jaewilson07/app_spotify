import React, { useEffect } from 'react';
import { Switch, Route, useHistory, useParams } from 'react-router-dom';

import Sidebar from '../../components/sidebar/Sidebar';
import Body from '../../components/main/main';
import Footer from '../../components/footer/Footer';

import { useStateProviderValue } from '../../state/state-provider';

import './Player.scss';

function Player({ spotify }) {
  const { playlistId } = useParams();
  const history = useHistory();

  const [{ playlists }, dispatch] = useStateProviderValue();

  useEffect(() => {
    // navigate to default playlist after testing if playlists have been updated
    if (!playlistId && playlists?.items?.length > 0) {
      history.push(`/playlist/${playlists.items[0].id}`);
    }
  }, [playlists, playlistId, dispatch, history]);

  return (
    <div className="container">
      <div className="player_body">
        <Sidebar />
        <Switch>
          <Route path="/playlist/:playlistId">
            <Body spotify={spotify} />
          </Route>
          <Route path="/">
            <h1>Welcome</h1>
          </Route>
        </Switch>
      </div>
      <div className="player_footer">
        <Footer />
      </div>
    </div>
  );
}

export default Player;
