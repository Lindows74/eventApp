//author Filip Ramstedt
app.controller('searchCtrl', ['$scope', 'feedFact' ,function ($scope, feedFact) {
 
    $scope.title = "Search view";
    
    $scope.page = "search";
    $scope.showMenu = true;
    
    $scope.feed = feedFact.getFeed();
    
    $scope.menuAction = function(action){
        switch(action){
            case "show":
                $scope.showMenu = true;
                break;
            case "hide":
                $scope.showMenu = false;
                break;
        }   
    }
    
}]);