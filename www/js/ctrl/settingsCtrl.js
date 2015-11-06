//author Filip Ramstedt
app.controller('settingsCtrl', ['$scope', '$http', 'cities', 'geo', 'feedFact',function ($scope, $http, cities, geo, feedFact) {
 
    $scope.title = "Settings view";
    
    $scope.locationServices = true;
    $scope.showMenu = true;
    
    geo.getLocation().then(function(data){
        $scope.location = data;    
    });
    
    $scope.likes = feedFact.getLikes().length;
    
    console.log($scope.likes);
    
    $scope.cities = cities;
    
    
    $scope.page = "settings"; 
    $scope.setLocationService = function(){
        $scope.locationServices = !$scope.locationServices;
        console.log($scope.locationServices);
    }
    
     $scope.signOut = function(){
        alert("logg out? you havent even logged in?!?!?!");
    }  
    
}]);