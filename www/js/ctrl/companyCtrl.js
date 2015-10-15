app.controller('companyCtrl', ['$scope' ,'$stateParams', 'feedFact', function ($scope, $stateParams, feedFact) {
 
    $scope.title = $stateParams.name;
    $scope.showMenu = true;
    $scope.page = $stateParams.prev;
    
    $scope.info = feedFact.getCompanyInfo($stateParams.name);
    
    console.log(feedFact.getCompanyInfo($stateParams.name));
    
}]);