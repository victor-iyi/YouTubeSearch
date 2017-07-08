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
		}, video => {
				console.log(video)
				this.props.videoChanged(video)
		})
	}

	render() {
		if (!this.props.searchTerm) {
			return (
				<div>
					<input
						type="text" placeholder="Search for videos"
						onChange={(event) => { 
							this.props.searchChanged(event.target.value)
							console.log(this.props.searchTerm)}
						}
					/>
				</div>
			)
		}
							
		return (
			<div className="search-item">
				<input
						type="text" placeholder="Search for videos"
						onChange={ (event) => this.props.searchChanged(event.target.value) }
				/>
				<div>
					{(this.props.searchTerm)
							? `Searching for: ${this.state.searchTerm}`
							: ''}
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