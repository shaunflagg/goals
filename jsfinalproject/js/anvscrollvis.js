
   var thePlayer = document.getElementById('p0');
	
    function isScrolledIntoView(elem) {
      // get the position of the viewport
      var docViewTop = $(window).scrollTop();
      var docViewBottom = docViewTop + $(window).height();
      // get the position of the player element
      var elemTop = $(elem).offset().top;
      var elemBottom = elemTop + $(elem).height();
      // determine if the player element is in fully in the viewport
      return ((elemBottom >= docViewTop) && (elemTop <= docViewBottom) && (elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    }

    function checkIfVideoInView() {
      // the player is loaded
      if (isScrolledIntoView(thePlayer)) {
        // the player is fully in the viewport
        anvp.p0.play();
      } else {
        // the player is not in the viewport
        anvp.p0.pause();
      }
    }

    window.onscroll = checkIfVideoInView;

