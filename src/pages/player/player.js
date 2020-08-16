import React from 'react';
import './player.css';

import Sidebar from '../../components/sidebar/sidebar';
import Body from '../../components/main/main';
import Footer from '../../components/footer/footer';

import './player.css';

function Player({ spotify }) {
  return (
    <div className="container">
      <div className="player_body">
        <Sidebar />
        <Body />
      </div>
      <div className="player_footer">
        <Footer />
      </div>
    </div>
  );
}

export default Player;
