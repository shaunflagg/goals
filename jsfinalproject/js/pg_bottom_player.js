//scroll bottom player pop up

	window.onscroll = function(ev) {

    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        // you're at the bottom of the page
		
     document.getElementById("anvBottom").setAttribute("style","visibility: visible;");
	 anvp.p1.play();
     anvp.p0.pause()
    } 
	else  {
		
   		document.getElementById("anvBottom").setAttribute("style","visibility: hidden;");
	    anvp.p1.pause();
		anvp.p0.play()

		}
	
};

