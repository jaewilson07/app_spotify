export const SPOTIFY = () => {
  const CLIENT_ID = '93af4bdd46bb4a1e837c958379fe53da';
  const AUTH_URL = 'https://accounts.spotify.com/authorize';
  const REDIRECT_URL = 'https://ify-df7d1.web.app';
  const SCOPES = [
    'user-read-currently-playing',
    'user-read-recently-played',
    'user-read-playback-state',
    'user-modify-playback-state',
    'user-top-read',
  ];

  const auth_url = () =>
    `${AUTH_URL}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL}&scope=${SCOPES.join(
      '%20'
    )}&response_type=token&show_dialog=true`;

  return auth_url();
};

export const FIREBASE_CONFIG = {
  apiKey: 'AIzaSyC4Ey8qJp6ud_5pCfa7vWG1cYh9CU2XjOU',
  authDomain: 'ify-df7d1.firebaseapp.com',
  databaseURL: 'https://ify-df7d1.firebaseio.com',
  projectId: 'ify-df7d1',
  storageBucket: 'ify-df7d1.appspot.com',
  messagingSenderId: '965298045281',
  appId: '1:965298045281:web:b2d6ad5e5b151a34d18520',
  measurementId: 'G-5VLLF0L2SG',
};

export const ACTION = {
  SET_USER: 'SET_USER',
  SET_TOKEN: 'SET_TOKEN',
  SET_PLAYLIST: 'SET_PLAYLIST',
  SET_CURRENTPLAYLIST: 'SET_CURRENTPLAYLIST',
};
