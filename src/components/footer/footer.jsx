import React from 'react';
import './footer.css';

import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import RepeatIcon from '@material-ui/icons/Repeat';

import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';
import Slider from '@material-ui/core/Slider';

import { Grid } from '@material-ui/core';

export default function Footer() {
  const buttons = [
    { title: 'Shuffle', Icon: ShuffleIcon, className: 'ft_green ft_ic' },
    { title: 'Previous', Icon: SkipPreviousIcon, className: 'ft_ic' },
    { title: 'Play', Icon: PlayCircleOutlineIcon, className: 'ft_ic' },
    { title: 'Next', Icon: SkipNextIcon, className: 'ft_ic' },
    { title: 'Repeat', Icon: RepeatIcon, className: 'ft_green ft_ic' },
  ];
  return (
    <div className="footer">
      <div className="footer_left">
        <img
          className="footer_albumLogo"
          src="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/715018/original/9b27a8924c7f731580084bb894550bf8696223c6/design-your-album-cover.jpg"
          alt=""
        />
        <div className="footer_songInfo">
          <h4>Title</h4>
          <p>Usher</p>
        </div>
      </div>

      {/* song controls */}
      <div className="footer_center">
        {buttons.map((buttons, index) => (
          <buttons.Icon className={buttons.className} key={index} />
        ))}
      </div>
      <div className="footer_right">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon className="ft_ic" />
          </Grid>
          <Grid item>
            <VolumeDownIcon className="ft_ic" />
          </Grid>
          <Grid item xs>
            <Slider />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
