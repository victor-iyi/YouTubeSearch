import React, { Component } from 'react'

export default class VideoListItem extends Component {

	constructor(props) {
		super(props)
	}

	render() {
		// const title = this.props.video.snippet.title
		// const thumbnail = this.props.snippet.thumbnail.default.url
		// return (
		// 	<li onClick={(event) => this.props.onVideoSelected(this.props.video)}
		// 			className="list-group-item">
		// 		<div className="video-list media">
		// 			<div className="media-left">
		// 				<img src={thumbnail} className="media-object" />
		// 			</div>
		// 		</div>
		// 		<div className="media-body">
		// 			<div className="media-heading">{title}</div>
		// 		</div>
		// 	</li>
		// )
		return (
			<li className="list-group-item"
					onClick={(event) => this.props.onVideoSelect(this.props.video) }>
				{this.props.video.title}
			</li>
		)
	}
	
}
