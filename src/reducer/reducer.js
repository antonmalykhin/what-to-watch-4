import {combineReducers} from 'redux';
import {reducer as data} from './data/data.js';
import {reducer as app} from './app/app';
import NameSpace from './name-space.js';


export default combineReducers({
  [NameSpace.DATA]: data,
  [NameSpace.APP]: app
});
