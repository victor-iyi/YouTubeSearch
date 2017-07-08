export default (state=null, action) => {
	console.log(`State: ${state}`)
	switch(action.type) {
		case 'SEARCH_CHANGED':
			console.log('action search changed')
			return action.payload
		default:
			return state
	}
}