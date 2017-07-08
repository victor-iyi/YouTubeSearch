export default (state=null, action) => {
	switch(action.type) {
		case 'SEARCH_CHANGED':
			return action.payload
		default:
			return state
	}
}