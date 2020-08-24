import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Header from './header/header';
import SongRow from './song-row/song-row';

import { useStateProviderValue } from '../../state/state-provider';

// Material UI Icons
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

import './main.css';
import { ACTION } from '../../constants';

export default function Body({ spotify }) {
  let { playlistId } = useParams();
  const [{ currentPlaylist }, dispatch] = useStateProviderValue();

  useEffect(() => {
    spotify.getPlaylist(playlistId).then((_playlist) => {
      dispatch({
        type: ACTION.SET_CURRENTPLAYLIST,
        currentPlaylist: _playlist,
      });
    });
  }, [playlistId, dispatch, spotify]);

  return (
    <div className="body">
      <Header spotify={spotify} />

      {/* render banner */}
      <div className="main_info">
        <img
          className="main_info_img"
          alt="playlist thumbnail"
          src={currentPlaylist?.images[0]?.url}
        />

        <div className="main_infoText">
          <strong>PLAYLIST</strong>
          <h2>{currentPlaylist?.name}</h2>
          <p>{currentPlaylist?.description}</p>
        </div>
      </div>

      <div className="main_songs">
        <div className="main_icons_container">
          <PlayCircleFilledIcon className="bd_ic_play" />
          <FavoriteIcon fontSize="large" />
          <MoreHorizIcon />
        </div>
      </div>

      {currentPlaylist?.tracks.items.map((item, index) => (
        <SongRow track={item.track} key={index} />
      ))}
    </div>
  );
}
