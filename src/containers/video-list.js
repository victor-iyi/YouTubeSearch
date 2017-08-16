import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import VideoListItem from '../components/video-list-item';
import { videoSelected } from '../actions';

class VideoList extends Component {

	videoList() {
		if ( !this.props.videos )
			return ( <div> No videos available. </div>);
		// videos available
		return this.props.videos.map((video) => {
			return (
				<VideoListItem
					onVideoSelected={this.props.videoSelected}
					key={video.etag}
					video={video} />
			);
		});
	}

	render() {
		return (
			<ul className="col-md-4 list-group">
				{this.videoList()}
			</ul>
		);
	}

}

const mapStateToProps = (state) => {
	return {
		videos: state.videos
	};
};

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({
		videoSelected : videoSelected
	}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(VideoList);
