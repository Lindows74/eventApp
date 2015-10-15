app.controller('feeditemCtrl', ['$scope', '$stateParams', 'feedFact', function ($scope, $stateParams, feedFact) {
 
    
    $scope.showMenu = true;
    
    $scope.page = $stateParams.prev;
    
    $scope.info = feedFact.getFeedItem($stateParams.title);
    
    console.log($stateParams)
    console.log(feedFact.getFeedItem($stateParams.title));
}]);