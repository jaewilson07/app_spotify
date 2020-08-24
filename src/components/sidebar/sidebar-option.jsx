import React from 'react';
import { useHistory } from 'react-router-dom';

export default function SidebarOption({ id, title, Icon }) {
  //route to the playlist page
  const history = useHistory();
  const selectPlaylist = (playlistId) => {
    history.push(`/playlist/${playlistId}`);
  };

  return (
    <div
      className="sidebar_option"
      onClick={() => {
        selectPlaylist(id);
      }}
    >
      {Icon && <Icon className="sidebar_option_icon" />}
      {Icon ? <h4>{title}</h4> : <p>{title}</p>}
    </div>
  );
}
