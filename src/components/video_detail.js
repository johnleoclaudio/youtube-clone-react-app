import React from 'react';

const VideoDetail = (props) => {

    if(!props.videos) {
        return <div>Loading...</div>
    }

    const videoId = props.videos.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`;
    return(
        <div className="video-detail col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={url} title={props.videos.snippet.title}></iframe>
            </div>

            <div className="details">
                <div><h2 className="text-center">{props.videos.snippet.title}</h2></div>
                <hr />
                <div>{props.videos.snippet.description}</div>
            </div>
        </div>
    );
}

export default VideoDetail;