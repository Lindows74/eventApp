app.controller('settingsCtrl', ['$scope', '$http', 'cities', function ($scope, $http, cities) {
 
    $scope.title = "Settings view";
    $scope.location = "Karlshamn";
    $scope.page = "settings";
    console.log(cities);
    
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