import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';

function ToolTeaserBox(props){ 
	var boxStyles = {"max-width":"290px"};
	if(props.link){
		return <div style={boxStyles}><a href={useBaseUrl(props.link)}><img  src={useBaseUrl(props.src)} alt={props.title}  onLoad={function(){retinajs();}} data-rjs="2" /></a><a href={useBaseUrl(props.link)}><h3>{props.title}</h3></a><p>{props.description}</p></div>;
	}
	return <div style={boxStyles}><img  src={useBaseUrl(props.src)} alt={props.title}  onLoad={function(){retinajs();}} data-rjs="2" /><h3>{props.title}</h3><p>{props.description}</p></div>;
};
export default ToolTeaserBox; 
	