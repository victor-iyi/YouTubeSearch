import React from 'react';


export default const VideoDetail = ({ video }) =>  {
	if (!video) return ( <div> Video details not available... </div> );

		const videoId = video.id.videoId;
		const videoTitle = video.snippet.title;
		const videoDescription = video.snippet.description;
		const videoURL = `https://youtube.com/embed/${videoId}`;

		return (
			<div className="video-detail col-md-8" >
				<div className="embed-responsive embed-responsive-16by9" >
					<iframe src={ videoURL } className="embed-responsive-item"></iframe>
				</div>
				<div className="details">
					<div> { videoTitle } </div>
					<div> { videoDescription } </div>
				</div>
			</div>
		);

};

export default VideoDetail;
