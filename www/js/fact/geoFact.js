app.factory('geo',['$http', '$q', function($http, $q) {
    
    var location = null
    
    return {
        getLocation: function() {
            if(location == null){
                var deferred = $q.defer();
                navigator.geolocation.getCurrentPosition(function(pos){
        
                    $http.get("http://maps.googleapis.com/maps/api/geocode/json?latlng="+pos.coords.latitude+","+pos.coords.longitude+"&sensor=true").then(function(data){
                        deferred.resolve(data.data.results[1].formatted_address.split(",")[0]);
                    });
                    
                });
                location = deferred.promise;
            }
            return location;
        }
    };
}]);