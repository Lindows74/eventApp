app.directive('topbar', function() {
  return {
    restrict: 'E',
    controller: ['$scope', function($scope){
        
        $scope.location = "Karlshamn";
        
    }],
    templateUrl: '/js/directive/template/topBar.html'
  };
});