app.controller('companyCtrl', ['$scope' ,'$stateParams', function ($scope, $stateParams) {
 
    $scope.title = "company view";
    $scope.showMenu = true;
    
    console.log($stateParams);
    
}]);