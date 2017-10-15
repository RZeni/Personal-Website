(function(){
  'use strict';

  angular.module('myApp.view1', [
    'ngRoute',
    'ui.materialize',
    'duScroll'
  ])

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/view1', {
      templateUrl: 'view1/view1.html',
      controller: 'View1Ctrl'
    });
  }])

  .controller('View1Ctrl', View1Ctrl);

  View1Ctrl.$inject = ['$scope'];

  function View1Ctrl($scope) {
    $(window).scroll(function (event) {
      var scroll = $(window).scrollTop();
      if(scroll>30 || scroll==undefined){
        $scope.showNav = true;
      }else{
        $scope.showNav = false;
      }
      $scope.$apply();
    });
  }
})();
