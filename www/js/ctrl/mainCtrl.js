app.controller('mainCtrl', ['$scope', 'feedFact' ,function ($scope, feedFact) {
 
    $scope.title = "Main view";
    
    $scope.page = "home";
    
    $scope.thumb = false;
    $scope.showMenu = true;
    
    $scope.feed = feedFact.getFeed();

    
    console.log(feedFact.getFeed());
    
    $scope.likePost =  function($index){
        feedFact.setLikes($index);
    }

    $scope.changeFeed = function(){
        $scope.thumb  = !$scope.thumb;
    }

}]);