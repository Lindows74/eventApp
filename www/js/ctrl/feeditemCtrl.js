app.controller('feeditemCtrl', ['$scope', '$stateParams', function ($scope, $stateParams) {
 
    $scope.title = "Feed item view";
    $scope.showMenu = true;
    
    console.log($stateParams);
}]);