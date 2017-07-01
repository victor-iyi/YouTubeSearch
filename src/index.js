import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import YTSearch from 'youtube-api-search'

import SearchBar from './components/search_bar'
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail'

const API_KEY = 'AIzaSyC-Qa3nrCo4T6jGUr1dxNbAdZsTnSw6Ct4'

// Create a new component. This component should produce some HTML
class App extends Component {

	constructor(props) {
		super(props)
		this.state = { 
			videos: [],
			selectedVideo: null
		 }
		 this.videoSearch('artificial intelligence')
	}

	videoSearch(term) {
		YTSearch({key: API_KEY, term: term}, (data) => {
			this.setState({ 
				videos: data,
				selectedVideo: data[0]
			 })
		})
	}

	render() {
		return (
			<div>
				<h1> YouTube Search! </h1>
				<SearchBar onSearchTermChange={term => this.videoSearch(term)} />
				<VideoDetail video={this.state.selectedVideo} />
				<VideoList 
					onVideoSelect={selectedVideo => this.setState({selectedVideo})}
					videos={this.state.videos} />
			</div>
		)
	}

}

// Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'))