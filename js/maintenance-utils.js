(
 function (window) {
    var self = this;
    
    
    // private variables

    var _landingPage = "https://software-development-of-better-tomorrow.org/";
    
	var disallowdResolutionsArray = ["1024", "600"];
	
    var _interval = 60 * 1000;
    
    // ~ private variables
    

    // private functions

    function tryAccessLandingPage_Internal() {
        window.location.href = _landingPage;
    }

    function checkWebsiteAvailability_Internal() {
        setInterval(function() {
            tryAccessLandingPage_Internal();
        }, _interval);
    }

    // ~ private functions


    // Public API
	
     self.checkWebsiteAvailability = function () {
        return checkWebsiteAvailability_Internal();
     };
    
    // ~ Public API


    window.maintenance = window.maintenance || self;
 }
)(window)