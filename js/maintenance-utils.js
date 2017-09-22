(
 function (window) {
    var self = this;
    
    
    // private variables

    var _landingPage = "https://software-development-of-better-tomorrow.org/";
    
	var disallowdResolutionsArray = ["1024", "600"];
	
    var _interval;
    
    // ~ private variables
    

    // private functions

    function getIntervalOrDefault_Internal() {
        var hash_value_of_interval = 1000;
        
        var hash = location.hash.substring(1).trim();
        if(hash.length > 0) {
            hash_value_of_interval = parseInt(hash);
        }

        return hash_value_of_interval * 1000;        
    }

    function tryAccessLandingPage_Internal() {
        window.location.href = _landingPage;
    }

    function checkWebsiteAvailability_Internal() {
        _interval = getIntervalOrDefault_Internal();

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
