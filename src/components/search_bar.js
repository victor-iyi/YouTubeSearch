import React, { Component } from 'react'

export default class SearchBar extends Component {

  constructor(props) {
    super(props)
    this.state = { searchTerm: 'Artificial intelligence' }
  }

  searchChanged(searchTerm) {
    this.setState({ searchTerm })
    this.props.onVideoSearch(term)
  }

  render() {
    return (
      <div className="search-bar">
        <input placeholder="Search Video"
          value={this.state.searchTerm}
          onChange={event => this.searchChanged(event.target.value)}
          />
          <p> {this.state.searchTerm.length !== 0 ? `You searched for: ${this.state.searchTerm}`: ''} </p>
      </div>
    )
  }

}
