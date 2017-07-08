import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import YTSearch from 'youtube-api-search'
import {searchChanged, videoChanged} from '../actions'

class Search extends Component {

	search() {
		YTSearch({
				key: this.props.API_KEY,
				term: this.props.searchTerm
		}, videos => {
				console.log(videos)
				this.props.videoChanged(videos)
		})
		// const videos = [
		// 	{ key: 10, title: 'Taylor Swift' },
		// 	{ key: 11, title: 'Jussie Smollet' },
		// 	{ key: 12, title: 'Justin Beiber' },
		// 	{ key: 13, title: 'Ariana Grande' }
		// ]
		// this.props.videoChanged(videos)
	}

	onSearch(value) {
		this.props.searchChanged(value)
		this.search()
	}

	render() {
							
		return (
			<div className="search-item">
				<input
						type="text" placeholder="Search for videos"
						onChange={ (event) => this.onSearch(event.target.value) }
				/>
				<div>
					{ this.props.searchTerm ? `Searching for: ${this.props.searchTerm}` : ''}
				</div>
			</div>
		)
	}

}

const mapStateToProps = (state) => {
		return {
			searchTerm: state.searchTerm, 
			API_KEY: state.API_KEY
		}
}

const mapDispatchToProps = (dispatch) => {
		return bindActionCreators({
				searchChanged: searchChanged,
				videoChanged: videoChanged
		}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)