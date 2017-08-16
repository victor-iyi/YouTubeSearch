import { VIDEO_CHANGED } from '../actions/actions';

export default function(state=null, action) {
	switch ( action.type ) {
		case VIDEO_CHANGED:
			return action.payload;
		default:
			return state;
	}
};
