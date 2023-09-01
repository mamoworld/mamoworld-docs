import React from 'react';

const YouTubeList = ({ ids }) => {
  const videoIds = ids.split(',');

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {videoIds.map((id) => (
        <div key={id} style={{ margin: '10px', width: '300px' }}>
          <iframe
            width="100%"
            height="200"
            src={`https://www.youtube.com/embed/${id}`}
            title={`YouTube Video ${id}`}
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      ))}
    </div>
  );
};

export default YouTubeList;
