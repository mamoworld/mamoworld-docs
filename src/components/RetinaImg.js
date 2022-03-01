import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';

function RetinaImg(props){ 
	return <img  src={useBaseUrl(props.src)} alt={props.alt}  onLoad={function(){retinajs();}} data-rjs="2" />;};

export default RetinaImg; 
	