import { combineReducers } from 'redux';

import main from './main';
import theme from './theme';
// import ui from './ui';

export default combineReducers({
  main,
  theme,
});
