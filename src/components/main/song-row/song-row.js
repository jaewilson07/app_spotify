import React from 'react';
import './song-row.css';

export default function SongRow({ track }) {
  return (
    <div className="songRow">
      <img
        className="songRow_img"
        src={track?.album?.images?.length > 0 ? track.album.images[0].url : ''}
        alt="track"
      />
      <div className="songRow_info">
        <h1>{track?.name}</h1>
        <p>
          {track?.artists.map((artist) => artist.name).join(', ')}
          <br />
          {track?.album.name}
        </p>
      </div>
    </div>
  );
}
