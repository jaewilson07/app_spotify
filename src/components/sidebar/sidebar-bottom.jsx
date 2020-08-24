import React from 'react';

import SidebarOption from './sidebar-option';

import './Sidebar.scss';

function SidebarBottom({ playlists }) {
  console.log('rendering sidebar_bottom');

  return (
    <React.Fragment>
      <strong className="sidebar_title">PLAYLISTS</strong>
      <hr />

      <div className="sidebar_playlists">
        {/* map over the playlists object */}
        {playlists?.map((playlist, index) => {
          if (playlist.name) {
            return (
              <SidebarOption
                key={index}
                title={playlist.name}
                id={playlist.id}
              />
            );
          } else {
            console.log('failure to render bottom');
            return null;
          }
        })}{' '}
      </div>
    </React.Fragment>
  );
}

export default SidebarBottom;
