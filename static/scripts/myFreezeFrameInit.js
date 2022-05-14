

window.addEventListener('load',function(){
	console.log("MM init freezeframe");
	new Freezeframe({selector:'.freezeframe', trigger:"click", overlay:true, responsive:true});
});
