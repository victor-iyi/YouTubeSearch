import { combineReducers } from 'redux';
import Videos from './videos'
import CurrentVideo from './current-video'
import SearchTerm from './search-term'
import APIKey from './api-key'

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
