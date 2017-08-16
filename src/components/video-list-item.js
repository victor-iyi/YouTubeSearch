import React, { Component } from 'react';

class VideoListItem extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		const title = this.props.video.snippet.title;
		const thumbnail = this.props.video.snippet.thumbnails.default.url;
		return (
			<li onClick={(event) => this.props.onVideoSelected(this.props.video)}
					className="list-group-item">
				<div className="video-list media">
					<div className="media-left">
						<img src={thumbnail} className="media-object" />
					</div>
				</div>
				<div className="media-body">
					<div className="media-heading">{title}</div>
				</div>
			</li>
		);
	}

}

export default VideoListItem;
