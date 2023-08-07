import React from 'react';

function Youtube(props){ 
	var startVal = (props.start?("?start="+props.start):"");
	return props.square ? 
	<div className="video-container square mmyoutubevideo"><iframe src={'https://www.youtube.com/embed/'+ props.id+startVal} frameborder="0" allowfullscreen="allowfullscreen"></iframe></div>
	:
	<div className="video-container mmyoutubevideo"><iframe src={'https://www.youtube.com/embed/'+ props.id+startVal} frameborder="0" allowfullscreen="allowfullscreen"></iframe></div>
}
export default Youtube; 