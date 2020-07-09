import produce from 'immer';
import * as types from './app.types';

const INITIAL_STATE = {
  loading: true,
  isDarkTheme: false,
  isFirstLoad: true,
  token: '',
  data: {},
};

const reducer = (state = INITIAL_STATE, action) =>
  produce(state, draft => {
    switch (action.type) {
      case types.SET_LOADING:
        draft.loading = action.payload;
        break;
      case types.SET_IS_DARK_THEME:
        draft.isDarkTheme = action.payload;
        break;
      case types.SET_IS_FIRST_LOAD:
        draft.isFirstLoad = action.payload;
        break;
      case types.SET_TOKEN:
        draft.token = action.payload;
        break;
    }
  });

export default reducer;
