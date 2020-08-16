import React from 'react';
import './sidebar.css';

// icons //
import { ReactComponent as Logo } from '../../assets/logo.svg';

import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';

import SidebarOption from './sidebar-option';
import { useStateProviderValue } from '../../state/state-provider';

export default function Sidebar() {
  const [{ playlists }] = useStateProviderValue();

  const menu = [
    { title: 'Home', icon: HomeIcon },
    { title: 'Search', icon: SearchIcon },
    { title: 'Your Library', icon: LibraryMusicIcon },
  ];

  return (
    <div className="sidebar">
      {/* Sidebar Top */}
      <div className="sidebar_top">
        <Logo className="sidebar_logo" />
        {menu.map((option, index) => (
          <SidebarOption key={index} title={option.title} Icon={option.icon} />
        ))}
        <br />
      </div>

      {/* Sidebar Bottom */}
      <div className="sidebar_bottom">
        <strong className="sidebar_title">PLAYLISTS</strong>
        <hr />
        <div className="sidebar_playlists">
          {playlists?.items?.map((playlist, index) => {
            if (playlist.name) {
              return <SidebarOption key={index} title={playlist.name} />;
            } else {
              console.log(playlist);
              return null;
            }
          })}{' '}
        </div>
      </div>
    </div>
  );
}
