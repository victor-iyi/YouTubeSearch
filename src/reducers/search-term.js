export default (state='artificial intelligence', action) => {
	switch(action.type) {
		case 'SEARCH_CHANGED':
			return action.payload
		default:
			return state
	}
}