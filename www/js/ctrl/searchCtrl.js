app.controller('searchCtrl', ['$scope', 'feedFact' ,function ($scope, feedFact) {
 
    $scope.title = "Search view";

    $scope.feed = feedFact.getFeed();

    $scope.searchToken = "";
    
    $scope.page = "search";
    
    window.addEventListener('native.keyboardshow', function(){
        document.body.classList.add('keyboard-open');
    });

}]);