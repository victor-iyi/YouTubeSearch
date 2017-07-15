import React, { Component } from 'react'
import { connect } from 'react-redux'

class VideoDetail extends Component {


	render() {
		if ( !this.props.video )
			return (<div> Loading... </div>)
		/* 
		return (
			<div>
				<h3> Details for: </h3>
				<div>
					{this.props.video.title}
				</div>
			</div>
		) 
		*/
		const videoId = this.props.video.id.videoId
		const url = `https://youtube.com/embed/${videoId}`
		const videoTitle = this.props.video.snippet.title
		const videoDescription = this.props.video.snippet.description
		return (
			<div className="video-detail col-md-8">
				<div className="embed-responsive embed-responsive-16by9">
					<iframe src={url} className="embed-responsive-item"></iframe>
				</div>
				<div className="details">
					<div>{videoTitle}</div>
					<div>{videoDescription}</div>
				</div>
			</div>
		)
	}

}

const mapStateToProps = (state) => {
	return {
		video: state.currentVideo 
	}
}

export default connect(mapStateToProps)(VideoDetail)