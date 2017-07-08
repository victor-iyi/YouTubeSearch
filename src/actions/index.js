// When we search for new video and new list of videos is returned
export function videoChanged(videos) {
	return {
		type: 'VIDEO_CHANGED',
		payload: videos
	}
}

// when the user clicks on a video
export function videoSelected(video) {
	return {
		type: 'VIDEO_SELECTED',
		payload: video
	}
}

// when the user searches for a video
export function searchChanged(searchTerm) {
	return {
		type: 'SEARCH_CHANGED',
		payload: searchTerm
	}
}