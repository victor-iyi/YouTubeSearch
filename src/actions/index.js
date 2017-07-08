export function videoSelected(video) {
	console.log(`Video selected: ${video}`)
	return {
		type: 'VIDEO_SELECTED',
		payload: video
	}
}

export function searchChanged(searchTerm) {
	console.log(`Search term: ${searchTerm}`)
	return {
		type: 'SEARCH_CHANGED',
		payload: searchTerm
	}
}

export function videoChanged(video) {
	return {
		type: 'VIDEO_CHANGED',
		payload: video
	}
}