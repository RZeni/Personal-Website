(function(){
  'use strict';

  angular.module('myApp.view1', [
    'ngRoute',
    'ngSanitize',
    'ui.materialize',
    'duScroll'
  ]).value('duScrollDuration', 1000)
    .value('duScrollOffset', 60)

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/view1', {
      templateUrl: 'view1/view1.html',
      controller: 'View1Ctrl'
    });
  }])

  .controller('View1Ctrl', View1Ctrl);

  View1Ctrl.$inject = ['$scope', '$sce'];

  function View1Ctrl($scope, $sce) {
    $scope.expertise = [
      {
        icon: "group",
        heading: "User Experience Focused",
        blurb: "I collaborate with clients and transform ideas into well " +
               "thought out designs. I conceptualize and wireframe intuitive " +
               "interfaces focusing on content and user experience."
      },
      {
        icon: "build",
        heading: "Built to Last",
        blurb: "I build solutions according to proven industry best practices " +
               "utilizing standards and technologies as they align with the " +
               "project needs."
      },
      {
        icon: "data_usage",
        heading: "Cloud Optimized",
        blurb: "I engineer robust backend solutions that can withstand today's," +
               " as well as the future need for scaleability, performance and " +
               "reliability requirements."
      }
    ];

    $scope.work = [
      {
        name: "GMFM",
        contribution: "Cross platform Design, Development and Deployment",
        description: "GMFM is a revolutionary Gross Motor Function Measure " +
                     "application designed for the CanChild research group " +
                     "of McMaster University. The app assists therapists with " +
                     "the measuring and progress tracking of patients with " +
                     "Cerebral Palsy.",
        img: "images/GMFM-ALL.png",
        link: "https://www.canchild.ca/"
      },
      {
        name: "Arin<span class='bold'>ai</span>",
        contribution: "Website and Product Design, Development and Deployment",
        description: "Arinai is a company that aims to simplify medical jargon, " +
                     "and reduce language barriers in healthcare using artificial " +
                     "intelligence. They offer AI-assisted real-time translation " +
                     "and comprehension services at the point of care and " +
                     "emergency services. They utilize automatic language and " +
                     "speaker detection in order to preserve the caregivers' " +
                     "workflow, there by empowering patients to take control " +
                     "of their own healthcare",
        img: "images/arinai-ALL.png",
        link: "http://arinai.com/"
      },
      /*{
        name: "Groove Industries",
        contribution: "Cross platform Design, Development and Deployment",
        description: "Groove Industries description",
        img: "images/Groove-ALL.png",
        link: "https://www.grooveind.com/"
      },*/
      {
        name: "Squad",
        contribution: "Cross platform Design, Development and Deployment",
        description: "Squad is a social media platform that reinvents how " +
                      "you plan and organize your social activities. You can " +
                      "get notified on activities your friends embark on. " +
                      "Squad becomes a vehicle to get the word out about your " +
                      "events through your extended social network.",
        img: "images/Squad-ALL.png",
        link: "https://www.squad.com/"
      }
    ];

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
