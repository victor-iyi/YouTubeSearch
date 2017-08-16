import { combineReducers } from 'redux';
import APIKey from './api-key';
import CurrentVideo from './current-video';
import SearchTerm from './search-term';
import Videos from './videos';

/**
  * Global application state.
*/
const rootReducer = combineReducers({
	videos: Videos,
	currentVideo: CurrentVideo,
	searchTerm: SearchTerm,
	API_KEY: APIKey
});

export default rootReducer;
