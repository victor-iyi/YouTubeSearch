import React, { Component } from 'react'

export default class SearchBar extends Component {

	constructor(props) {
		super(props)
		this.state = { term: '' }
	}

	render() {
		return ( 
			<div>
				<input 
					value={this.state.term}
					onChange={event => this.setState({ term: event.target.value })} 
				/>
				<p>You typed: {this.state.term}</p>
			</div>
		)
	}

}