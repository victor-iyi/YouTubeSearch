import React from 'react'

const VideoListItem = ({video, onVideoSelected}) => {
  if ( !video ) return (<div>No video here...</div>)

  const imageURL = video.snippet.thumbnails.default.url
  const videoTitle = video.snippet.title

  return (
    <li onClick={() => onVideoSelected(video)}
        className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img src={imageURL} className="media-object" />
        </div>
      </div>
      <div className="media-body">
        <div className="media-heading">{videoTitle}</div>
      </div>
    </li>
  )

}

export default VideoListItem
