import { combineReducers } from 'redux';
import appReducer from './app/app.reducer';

const rootReducer = combineReducers({
  app: appReducer,
});

export default rootReducer;
