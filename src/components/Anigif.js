import React, { useState } from 'react';
import _uniqueId from 'lodash/uniqueId';

function Anigif(props){ 
	const [id] = useState(_uniqueId('prefix-'));
	  
	return <div style={{marginBottom: "20px", maxWidth:props.width}}><img   className="freezeframe" id={id} src={props.src} onLoad={function(){new Freezeframe({selector:'#'+id,  trigger:'click', overlay:true, responsive:true})}} /></div>;};

export default Anigif; 
	