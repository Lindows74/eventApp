app.directive('topbar', function() {
  return {
    restrict: 'E',
    controller: ['$scope', 'geo',function($scope, geo){
        
        geo.getLocation().then(function(data){
          $scope.location = data;
        });
        
    }],
    templateUrl: 'js/directive/template/topBar.html'
  };
});