app.controller("mainCtrl",["$scope","feedFact","$ionicPlatform",function(e,t,n){e.title="Main view",e.page="home",e.thumb=!1,e.showMenu=!0,e.feed=t.getFeed(),console.log(t.getFeed()),n.on("resume",function(){e.thumb=!1}),e.likePost=function(e){t.setLikes(e)},e.changeFeed=function(){e.thumb=!e.thumb}}]);