import React, { Component } from 'react'
import Search from '../containers/search'
import VideoDetail from '../containers/video-detail'
import VideoList from '../containers/video-list'

export default class App extends Component {

	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div>
				<h1> YouTube Search </h1>
				<Search />
				<VideoDetail />
				<VideoList />
			</div>
		)
	}
	
}
