app.controller('settingsCtrl', ['$scope', '$http', 'cities', 'geo', function ($scope, $http, cities, geo) {
 
    $scope.title = "Settings view";
    
    geo.getLocation().then(function(data){
        $scope.location = data;    
    });
    
    $scope.cities = cities;
    
    
    $scope.page = "settings";
    console.log($scope.cities);
    
    $scope.init = function () {
        var substringMatcher = function(strs) {
            return function findMatches(q, cb) {
                var matches, substringRegex;
                matches = [];
                substrRegex = new RegExp(q, 'i');
            
                $.each(strs, function(i, str) {
                if (substrRegex.test(str)) {
                    matches.push(str);
                }
                });
            
                cb(matches);
            };
        };
        
        $('.typeahead').typeahead({
            hint: true,
            highlight: true,
            minLength: 1
        },
        {
            name: 'states',
            source: substringMatcher(cities)
        });
    }   
}]);