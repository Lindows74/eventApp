//author Filip Ramstedt
app.directive('topbar', function() {
  return {
    restrict: 'E',
    controller: ['$scope', 'geo',function($scope, geo){
        
        geo.getLocation().then(function(data){
          $scope.location = data;
        });
        $scope.init = function(){
            
            //Sidebar slide
           $('.menu-btn').click(function(){
            if($('.side-menu').css("left") == "-200px"){
			 $('.side-menu').css("left", "0px");
		    }else{
			 $('.side-menu').css("left", "-200px");
		    } 
           })
           
           //Search input slide
           $('.search-icon').click(function(){
               $('.search-input').slideToggle();
           })
        }
    }],
    templateUrl: 'js/directive/template/topBar.html'
  };
});