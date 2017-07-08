import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import VideoListItem from '../components/video-list-item'
import { videoSelected } from '../actions'

class VideoList extends Component {

	videoList() {
		if ( !this.props.videos )
			return ( <div> No videos available. </div>)
		// videos available
		return this.props.videos.map((video) => {
			return (
				<VideoListItem 
					onVideoSelect={this.props.videoSelected}
					key={video.key}
					video={video} />
			)
		})
	}

	render() {
		return (
			<ul className="list-group">
				{this.videoList()}
			</ul>
		)
	}

}

const mapStateToProps = (state) => {
	return {
		videos: state.videos
	}
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({ 
		videoSelected : videoSelected
	}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoList)