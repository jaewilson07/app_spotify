import React from 'react';
import './main.css';

import Header from './header/header';
import SongRow from './song-row/song-row';

import { useStateProviderValue } from '../../state/state-provider';

// Material UI Icons
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

export default function Body({ spotify }) {
  const [{ discover_weekly }] = useStateProviderValue();
  console.log(discover_weekly);
  return (
    <div className="body">
      <Header spotify={spotify} />

      {/* render banner */}
      <div className="main_info">
        <img
          className="main_info_img"
          alt="playlist thumbnail"
          src={discover_weekly?.images[0].url}
        />

        <div className="main_infoText">
          <strong>PLAYLIST</strong>
          <h2>{discover_weekly?.name}</h2>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>

      <div className="main_songs">
        <div className="main_icons_container">
          <PlayCircleFilledIcon className="bd_ic_play" />
          <FavoriteIcon fontSize="large" />
          <MoreHorizIcon />
        </div>
      </div>

      {discover_weekly?.tracks.items.map((item, index) => (
        <SongRow track={item.track} key={index} />
      ))}
      <SongRow />
    </div>
  );
}
