import React, { Component } from 'react';
import Search from '../containers/search';
import VideoDetail from '../containers/video-detail';
import VideoList from '../containers/video-list';

class App extends Component {

	render() {
		return (
			<div>
				<h1> YouTube Search </h1>
				<Search />
				<VideoDetail />
				<VideoList />
			</div>
		);
	}

}

export default Component;
