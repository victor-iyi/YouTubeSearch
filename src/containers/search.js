import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';
// custom imports
import { searchChanged, videoChanged, videoSelected } from '../actions';

class Search extends Component {

	constructor(props) {
		super(props);
		this.search();
	}

	search() {
		YTSearch({
			key: this.props.API_KEY,
			term: this.props.searchTerm
		}, (videos) => {
			this.props.videoChanged(videos);
			this.props.videoSelected(videos[0]);
		});
	}

	onSearch(value) {
		this.props.searchChanged(value);
		const videoSearch = _.debounce(() => this.search(), 300);
		videoSearch();
	}

	render() {
		return (
			<div className="search-bar">
				<input
						type="text" placeholder="Search for videos"
						value={this.props.searchTerm}
						onChange={ (event) => this.onSearch(event.target.value) }
				/>
				<div>
					{ this.props.searchTerm ? `Searching for: ${this.props.searchTerm}` : ''}
				</div>
			</div>
		);
	}

}

const mapStateToProps = (state) => {
	return {
		searchTerm: state.searchTerm,
		API_KEY: state.API_KEY
	};
};

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({
		searchChanged: searchChanged,
		videoChanged: videoChanged,
		videoSelected: videoSelected
	}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
