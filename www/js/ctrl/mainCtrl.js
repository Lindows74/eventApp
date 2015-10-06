app.controller('mainCtrl', ['$scope', 'feedFact' ,function ($scope, feedFact) {
 
    $scope.title = "Main view";
    
    $scope.page = "home";
    
    $scope.feed = feedFact.getFeed();
    
    console.log(feedFact.getFeed());

}]);