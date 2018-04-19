import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search-bar';
import VideoDetail from './components/video_detail';
import VideoList from './components/video_list';

import './style/style.css';

const API_KEY = 'AIzaSyCJ8vM8wtqLCXAE-o3IveSd9-ka5nPTIio';

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
        YTSearch({ key: API_KEY, term}, (data) => {
            this.setState({
                videos: data,
                selectedVideo: data[0]
            })
         });
    }

    render(){
        return(
            <div>
                <SearchBar onSearchTermChange={ term => this.videoSearch(term)}/>
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

