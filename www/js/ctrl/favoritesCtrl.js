app.controller('favoritesCtrl', ['$scope' , 'feedFact', function ($scope, feedFact) {
 
    $scope.title = "Favorites view";
        
    console.log(feedFact.getLikes());

    $scope.page = "favorites";
    
    $scope.favorites = setDelMenu(feedFact.getLikes());
    
    $scope.delMenu = function($index, eventType){
        console.log($index, eventType);
        
        switch(eventType){
            case "open":
                $scope.favorites[$index].delmenu = true;
                break;
            case "close":
                $scope.favorites[$index].delmenu = false;
                break;
        }
        console.log($scope.favorites[$index].title, $scope.favorites[$index].delmenu);
    }
    
    $scope.delItem = function($index){
        if(confirm("Är du säker på att du vill ta bort " + $scope.favorites[$index].title + "?")){
            feedFact.removeLikes($index);
        }   
    }
    
    function setDelMenu(obj){
        var obj = obj
        for(key in obj) obj[key].delmenu = false;
        return obj;
    }

}]);