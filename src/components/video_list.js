import React from 'react';
import VideoListItem from './video_list_item.js';

const VideoList = (props) => {
  if ( !props.videos ) return (<div>Video not available...</div>)
  const videoItems = props.videos.map(video => {
    return (
      <VideoListItem
        onVideoSelected={props.onVideoSelected}
        key={video.etag}
        video={video} />
    );
  });
  return (
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  );
};

export default VideoList;
