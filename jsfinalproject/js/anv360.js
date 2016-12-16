// 360 on/off


anvp.listener = threeSixtyListener;
function threeSixtyListener(e){
     if (e.name == "METADATA_LOADED") {
     
	 var tags = e.args[2].tags;
	 console.log(tags);
		
		if (tags.indexOf("360") > -1){
			anvp.p0.config[360] = true;
		 }
		 
		 else {
			anvp.p0.config[360] = false;
			 }
	 
	 }
}
