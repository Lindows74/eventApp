//author Filip Ramstedt
app.directive('topbar', function() {
  return {
    restrict: 'E',
    controller: ['$scope', 'geo',function($scope, geo){
        
        geo.getLocation().then(function(data){
          $scope.location = data;
        });
        $scope.init = function(){
           $('.menu-btn').click(function(){
               
            if($('.side-menu').css("left") == "-150px"){

			 $('.side-menu').css("left", "0px");

		    }else{

			 $('.side-menu').css("left", "-150px");

		    }
               
               
           }) 
        }
    }],
    templateUrl: 'js/directive/template/topBar.html'
  };
});