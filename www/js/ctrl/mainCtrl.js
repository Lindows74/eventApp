//author Filip Ramstedt
app.controller('mainCtrl', ['$scope', 'feedFact', '$ionicPlatform', function ($scope, feedFact, $ionicPlatform ) {
 
    $scope.title = "Main view";
    
    $scope.page = "home";
    
    $scope.thumb = false;
    $scope.showMenu = true;
    
    $scope.feed = feedFact.getFeed();

    
    console.log(feedFact.getFeed());
    
    $ionicPlatform.on("resume", function(){
         $scope.thumb = false;
    });
    
    $scope.likePost =  function($index){
        feedFact.setLikes($index);
    }

    $scope.changeFeed = function(){
        $scope.thumb  = !$scope.thumb;
    }
  

}]);