import React, { Component } from 'react'

export default class SearchBar extends Component {

  constructor(props) {
    super(props)
    this.state = { searchTerm: 'Artificial intelligence' }
  }

  render() {
    return (
      <div>
        <input placeholder="Search Video"
          value={this.state.searchTerm}
          onChange={event => this.setState({ searchTerm: event.target.value })}
          />
          <p>You typed: {this.state.searchTerm} </p>
      </div>
    )
  }

}
