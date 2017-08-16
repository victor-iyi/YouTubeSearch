import { SEARCH_CHANGED } from '../actions/actions';

const INITIAL_STATE = 'artificial intelligence';

export default (state=INITIAL_STATE, action) => {
	switch(action.type) {
		case SEARCH_CHANGED:
			return action.payload;
		default:
			return state;
	}
};
