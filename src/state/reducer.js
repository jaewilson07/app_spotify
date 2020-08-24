import { ACTION } from '../constants';

export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  currentPlaylist: null,

  //REMOVE LATER
  token: null,
  //'BQAWRqhTzgeWKVimdYfxFg4BrAa-o4dTMnCqwIQC7TX8ZLjjcc…4Cm7MvHpfBrHPYKKzDKbP1qtynr2o4iB2gvsFKQwSw2QUXaT4',
};

export const reducer = (state, action) => {
  switch (action.type) {
    case ACTION.SET_USER:
      console.log('setting user', action.user);
      return {
        ...state,
        user: action.user,
      };
    case ACTION.SET_TOKEN:
      console.log('setting token');
      return {
        ...state,
        token: action.token,
      };
    case ACTION.SET_PLAYLIST:
      console.log('setting playlists');
      return {
        ...state,
        playlists: action.playlists,
      };

    case ACTION.SET_CURRENTPLAYLIST:
      console.log('setting currentPlaylist');
      return {
        ...state,
        currentPlaylist: action.currentPlaylist,
      };
    default:
      return state;
  }
};
