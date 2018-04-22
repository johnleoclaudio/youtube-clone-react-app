import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search-bar';
import VideoDetail from './components/video_detail';
import VideoList from './components/video_list';

import './style/style.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state= {
            videos: [],
            selectedVideo: null
        }

        this.videoSearch('Javascript');
    }

    videoSearch(term) {
        YTSearch({ key: process.env.REACT_APP_API_KEY, term}, (data) => {
            this.setState({
                videos: data,
                selectedVideo: data[0]
            })
         });
    }

    render(){
        const videoSearch = _.debounce((term) => { this.videoSearch(term)}, 300);

        return(
            <div>
                <SearchBar onSearchTermChange={videoSearch}/>
                <br/>
                <div className="row">
                    <VideoDetail videos={this.state.selectedVideo}/>
                    <VideoList onVideoSelect={selectedVideo => this.setState({ selectedVideo })} videos={this.state.videos}/>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));

