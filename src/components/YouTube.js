import React from 'react';

function Youtube(props){ 
	return <div className="video-container"><iframe src={'https://www.youtube.com/embed/'+ props.id} frameborder="0" allowfullscreen="allowfullscreen"></iframe></div>
}
export default Youtube; 