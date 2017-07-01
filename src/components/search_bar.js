import React, { Component } from 'react'

export default class SearchBar extends Component {

	constructor(props) {
		super(props)
		this.state = { term: '' }
	}

	onInputChange(term) {
		this.setState({term})
		this.props.onSearchTermChange(this.state.term)
	}

	render() {
		return ( 
			<div className="search-bar">
				<input 
					placeholder="search video"
					value={this.state.term}
					onChange={event => this.onInputChange(event.target.value)} 
				/>
			</div>
		)
	}

}