import React from 'react';
import './Login.scss';

import { ReactComponent as Logo } from '../../assets/logo_wide.svg';

import { SPOTIFY } from '../../constants';

function Login() {
  console.log('logging in');

  const spotify_url = SPOTIFY();

  return (
    <div className="login">
      <div className="login_container">
        <Logo className="logo" />
        <a href={spotify_url}>LOGIN WITH SPOTIFY</a>
      </div>
    </div>
  );
}

export default Login;
