app.controller('mainCtrl', ['$scope', 'feedFact' ,function ($scope, feedFact) {
 
    $scope.title = "Main view";
    
    $scope.page = "home";
    
    $scope.feed = feedFact.getFeed();
    
    console.log(feedFact.getFeed());
    
    $scope.likePost =  function($index){
        alert("likeing post? " + $scope.feed[$index].title);
    }

}]);