'use strict';
/* global angular */
angular.module('whiteflag.home', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'home/home.html',
    controller: 'HomeCtrl'
  });
}])

.controller('HomeCtrl', ['$scope', function ($scope) {
    $scope.topBanner = null;
    $scope.menuItems = [
      { name: 'Announcements', url: '#!/news'},
      { name: 'Services & Contact Info', url: '#!/services'},
      { name: 'Map', url:'https://www.google.com/maps/place/4625+E+Iowa+Ave,+Denver,+CO+80222/@39.6836303,-104.9332396,15z/data=!4m7!1m4!3m3!1s0x876c7dde82eac263:0x2912172574625955!2s4625+E+Iowa+Ave,+Denver,+CO+80222!3b1!3m1!1s0x876c7dde82eac263:0x2912172574625955',ext: true},
      { name: 'Discipleship', url:'#!/discipleship'},
      { name: 'Studies', url:'#!/studies'},
      { name: 'Today\'s Devotion', url: '#!/devotions' },
      { name: 'Prayer Requests', url: '#!/prayer' },
      { name: 'Missions', url: '#!/missions' },
      { name: 'Giving', url:'#!/giving'},
      { name: 'Resources', url: '#!/resources' },
      { name: 'Love Abounds Food Bank', url:'#!/foodbank'},
      { name: 'YouTube Videos', url:'https://m.youtube.com/channel/UCNum-_XTF3mmxVUzVRHki8Q',ext: true},
      { name: 'Facebook Page', url:'https://m.facebook.com/whiteflagcalvary',ext: true},
      { name: 'About The App', url:'#!/about'}
    ];
    
    var v = document.getElementById('welcome_video');
    v.addEventListener(
       'play', 
          function() { 
             v.play();
          }, 
        false);

    v.onclick = function() {
      if (v.paused) {
        v.play();
        v.controls=null;
      } else {
        v.pause();
        v.controls="controls";
      }
    };

}]);