import React from 'react';

function Youtube(props){ 
	return props.square ? 
	<div className="video-container square"><iframe src={'https://www.youtube.com/embed/'+ props.id} frameborder="0" allowfullscreen="allowfullscreen"></iframe></div>
	:
	<div className="video-container"><iframe src={'https://www.youtube.com/embed/'+ props.id} frameborder="0" allowfullscreen="allowfullscreen"></iframe></div>
}
export default Youtube; 