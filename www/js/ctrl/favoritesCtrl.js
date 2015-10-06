app.controller('favoritesCtrl', ['$scope' ,function ($scope) {
 
    $scope.title = "Favorites view";

    $scope.openTrash = function($event){

    	// console.log(angular.element($event.target).parent());
    	
    	document.getElementById('delete-tab').style.right = "0%";

    }

    $scope.closeTrash = function($event){

    	// console.log(angular.element($event.target).parent());
    	
    	document.getElementById('delete-tab').style.right = "-45%";

    }

}]);