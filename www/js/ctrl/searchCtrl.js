app.controller('searchCtrl', ['$scope', 'feedFact' ,function ($scope, feedFact) {
 
    $scope.title = "Search view";

    $scope.feed = feedFact.getFeed();

    $scope.searchToken = "";
    
    $scope.page = "search";
    
    
    $scope.menuAction = function(action){
        switch(action){
            case "show":
                document.getElementById("navmenu").style.display = "flex";
                break;
            case "hide":
                document.getElementById("navmenu").style.display = "none";
                break;
        }   
    }
    
}]);