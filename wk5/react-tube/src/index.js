import React, { Component } from "react";
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import SearchBar from "./components/search_bar";
import VideoDetail from "./components/video_detail";
import VideoList from "./components/video_list";
import VideoListItem from "./components/video_list_item";

const API_KEY = 'AIzaSyCIF-nV9qLeAriwePo8cTdgHGEuH_VAno0';
const axios = require('axios');

class App extends Component {
  constructor () {
    super()

    this.state = {
      videos: [],
      selectedVideo: null,
    };

    this.videoSearch = this.videoSearch.bind(this);
    this.updateSelectedVideo = this.updateSelectedVideo.bind(this);
  }

  videoSearch (term) {
    const url = 'https://www.googleapis.com/youtube/v3/search';

    const params = {
      part: 'snippet',
      key: API_KEY,
      q: term,
      type: 'video'
    };

    axios.get(url, { params: params })
      .then(response => {
        this.setState({
          videos: response.data.items,
          selectedVideo: response.data.items[this.clickVideo]
        });
      })
      .catch(error => {
        console.error(error);
      });
  };

  updateSelectedVideo (selection) {
    this.setState({
      videos: this.state.videos,
      selectedVideo: selection
    })
  };

  render () {
    return (
      <div>
        <SearchBar onSearchTermChange={this.videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList videos={this.state.videos} updateSelectedVideo={this.updateSelectedVideo} />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
