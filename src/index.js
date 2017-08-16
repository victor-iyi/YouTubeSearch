import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
// custom components
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
// YouTube v3 search API key (console.developers.google.com)
const API_KEY = 'AIzaSyC-Qa3nrCo4T6jGUr1dxNbAdZsTnSw6Ct4';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null
    };
    this.videoSearch('Artificial Intelligence');
  }

  videoSearch(searchTerm) {
    YTSearch({
      key: API_KEY,
      term: searchTerm
    }, (data) => {
      this.setState({
        videos: data,
        selectedVideo: data[0]
      });
    });
  }

  render() {
    const videoSearch = _.debounce((term) => this.videoSearch(term), 300)
    return (
      <div>
        <h1>YouTube Search</h1>
        <SearchBar onVideoSearch={(term) => videoSearch(term)}/>
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList onVideoSelected={video => this.setState({selectedVideo: video})} videos={this.state.videos}/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
