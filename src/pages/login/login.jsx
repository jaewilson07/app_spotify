import React from 'react';
import './login.css';

import { ReactComponent as Logo } from '../../assets/logo_wide.svg';

import { SPOTIFY } from '../../constants';

function Login() {
  console.log('logging in');

  const spotify_url = SPOTIFY();

  return (
    <div className="login">
      <Logo className="logo" />
      <a href={spotify_url}>LOGIN WITH SPOTIFY</a>
    </div>
  );
}

export default Login;
