app.controller('favoritesCtrl', ['$scope' ,function ($scope) {
 
    $scope.title = "Favorites view";


    $scope.page = "favorites";

    // .delete-tab-open    öppnar klassen
    // .delete-tab-close    Stänger klassen
    
    $scope.favorites = [
        {
            "title": "Sveriges största Cirkus",
            "company": "Cirkus Cirkör",
            "date": "5-9-2015",
            "delmenu": false
        },
        {
            "title": "ElektroFestival 2.0",
            "company": "&Vin",
            "date": "10-11-2015",
            "delmenu": false
        },
    ];
    
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
        $scope.favorites.splice($index, 1);    
    }

}]);