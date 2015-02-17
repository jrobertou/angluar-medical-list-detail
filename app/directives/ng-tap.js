ciapp.directive('ngTap', function() {
	var isTouch = !!('ontouchstart' in window);
	return function(scope, elm, attrs) {
	  if (isTouch) {
	    var tapping = false;
	    elm.bind('touchstart', function() {
	      tapping = true;
	    });
	    elm.bind('touchmove', function() {
	      tapping = false;
	    });
	    elm.bind('touchend', function() {
	      tapping && scope.$apply(attrs.ngTap);
	    });
	  }
	  else {
	    elm.bind('click', function() {
	      scope.$apply(attrs.ngTap);
	    });
	  }
	};
});