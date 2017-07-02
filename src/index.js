import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import YTSearch from 'youtube-api-search'
// custom components
import SearchBar from './components/search_bar'
import VideoList from './components/video_list'

class App extends Component {

  constructor() {
    super()
    this.state = {
      videos: [{id: 1, name: 'Apocalypse'},
               {id: 2, name: 'Moving Tracy'},
               {id: 3, name: 'Savotiar'},
               {id: 4, name: 'Return of the Moicans'},
               {id: 5, name: 'Avatar'}]
    }
  }

  videoSearch(searchTerm) {
    YTSearch({key: API_KEY, term: searchTerm}, (data) => {
      this.setState({ videos: data })
    })
  }

  render() {
    return (
      <div>
        <h1>YouTube Search App</h1>
        <SearchBar />
        <VideoList videos={this.state.videos} />
      </div>
    )
  }
}

const app = document.querySelector('.container')
ReactDOM.render(<App />, app)
