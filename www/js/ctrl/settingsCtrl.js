app.controller('settingsCtrl', ['$scope', '$http', function ($scope, $http) {
 
    $scope.title = "Settings view";
    
    $scope.page = "settings";
    
    $scope.cities = [];
    
    $http.get("js/cities.json").then(function(data){
        $scope.cities = data.data;
    });

}]);