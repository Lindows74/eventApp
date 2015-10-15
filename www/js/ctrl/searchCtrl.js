app.controller('searchCtrl', ['$scope', 'feedFact' ,function ($scope, feedFact) {
 
    $scope.title = "Search view";

    $scope.feed = feedFact.getFeed();

    $scope.searchToken = "";
    
    $scope.page = "search";
    
    
    //TODO Fix THIS test with phonegap app!
    $scope.menuAction = function(action){
        switch(action){
            case "show":
                console.log("Show");
                document.getElementById("navmenu").style.display = "flex";
                break;
            case "hide":
                console.log("hide   ");
                document.getElementById("navmenu").style.display = "none";
                break;
        }   
    }
    
}]);