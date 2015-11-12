//author Filip Ramstedt
var app = angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
.config(function($stateProvider, $urlRouterProvider, $httpProvider, $ionicConfigProvider) {
  
  $ionicConfigProvider.views.transition('fade-in');
  
  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: 'views/home.html',
    controller: 'mainCtrl'
  })
  .state('search', {
    url: '/search',
    templateUrl: 'views/search.html',
    controller: 'searchCtrl'
  })
  .state('favorites', {
    url: '/favorites',
    templateUrl: 'views/favorites.html',
    controller: 'favoritesCtrl'
  })
  .state('categorys', {
    url: '/categorys',
    templateUrl: 'views/categorys.html',
    controller: 'categorysCtrl'
  })
  .state('settings', {
    url: '/settings',
    templateUrl: 'views/settings.html',
    controller: 'settingsCtrl',
    resolve:{
      cities: function($http, $q){
        var deferred = $q.defer();
        $http.get("js/cities.json").then(function(data){
            deferred.resolve(data.data);
        });
        return deferred.promise;
      }
    }
  })
  .state('company', {
    url: '/company/:name/:prev',
    templateUrl: 'views/company.html',
    controller: 'companyCtrl'
  })
  .state('feeditem', {
    url: '/feeditem/:title/:prev',
    templateUrl: 'views/feeditem.html',
    controller: 'feeditemCtrl'
  });

  $urlRouterProvider.otherwise('/categorys');

});