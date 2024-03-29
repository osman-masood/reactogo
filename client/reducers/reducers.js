import { combineReducers } from 'redux-immutable';

// Reducers
import login from './login-reducer.js';
import modals from './modals-reducer.js';
import viewport from './viewport-reducer.js';
import fetchedDataReducer from './fetched-data-reducer.js';
import routeReducer from './route-reducer.js';
import toasterReducer from './toaster-reducer.js';
import sideMenuReducer from './side-menu-reducer.js';

const app = combineReducers({
  viewport: viewport,
  routing: routeReducer,
  modals: modals,
  session: login,
  toasters: toasterReducer,
  sideMenu: sideMenuReducer,
  fetchedData: fetchedDataReducer,
});

export default app;
