//author Filip Ramstedt
app.controller('feeditemCtrl', ['$scope', '$stateParams', 'feedFact', function ($scope, $stateParams, feedFact) {
    
    $scope.showMenu = true;
    
    $scope.page = $stateParams.prev;
    
    $scope.info = feedFact.getFeedItem($stateParams.title);
    
    $scope.likePost =  function(){
        feedFact.setLikesByTitle($stateParams.title);
        //$scope.info = feedFact.getFeedItem($stateParams.title)
        console.log($scope.info);
    }
    
}]);