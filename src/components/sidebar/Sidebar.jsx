import React from 'react';
import './Sidebar.scss';

// icons //
import { ReactComponent as Logo } from '../../assets/logo.svg';

import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';

import SidebarOption from './sidebar-option';
import { useStateProviderValue } from '../../state/state-provider';
import SidebarBottom from './sidebar-bottom';

export default function Sidebar() {
  console.log('rendering sidebar');

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
        <Logo className="sidebar_top_logo" />
        {menu.map((option, index) => (
          <SidebarOption key={index} title={option.title} Icon={option.icon} />
        ))}
        <br />
      </div>

      {/* Sidebar Bottom */}
      <div className="sidebar_bottom">
        <SidebarBottom playlists={playlists?.items} />
      </div>
    </div>
  );
}
