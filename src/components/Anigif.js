import React, { useState } from 'react';
import _uniqueId from 'lodash/uniqueId';
import BrowserOnly from '@docusaurus/BrowserOnly';
// function Anigif(props){ 
// 	const [id] = useState(_uniqueId('prefix-'));
	  
// 	return <div  style={{marginBottom: "20px", maxWidth:props.width}}><img  id={id} className="freezeframe"  src={props.src} onLoad={function(){new Freezeframe({selector:'#'+id,  trigger:'click', overlay:true, responsive:true})}} /></div>;};


class Anigif extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		  id: _uniqueId('prefix-')
		};
	  }
	render() {
		return <div  class="mmanigif" style={{marginBottom: "20px", maxWidth:this.props.width}}><img  id={this.state.id} className="freezeframe"  src={this.props.src} onLoad={function(e){new Freezeframe({selector:e.target,  trigger:'click', overlay:true, responsive:true})}} /></div>;
	}
  }

export default Anigif; 
	