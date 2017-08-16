import React, { Component } from 'react';

const VideoListItem = ({video, onVideoSelected}) {

		const title = video.snippet.title;
		const thumbnail = video.snippet.thumbnails.default.url;
		return (
			<li onClick={event => onVideoSelected(video)}
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

export default VideoListItem;
