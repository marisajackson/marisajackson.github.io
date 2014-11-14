(function(){

  'use strict';

  var app = angular.module('portfolio', ['ngSanitize']);

  // app.factory('projectFactory', ['$http', function($http){
  //   var object = {};
  //   $http.get('data/projects.json').success(function(data){
  //     var projects = data;
  //     object.projects = projects;
  //     return object;
  //   });
  //   return object;
  // }]);

  app.directive('navbar', [function(){
    return {
      restrict: 'E',
      templateUrl: 'partials/navbar.html'
    };
  }]);

  app.directive('portfolionav', [function(){
    return {
      restrict: 'E',
      templateUrl: 'partials/portfolio-nav.html',
      controllerAs: 'portfolio',
      controller: 'portfolioCtrl'
    };
  }]);

  // app.directive('project', [function(){
  //   return {
  //     restrict: 'E',
  //     templateUrl: 'partials/project.html'
  //   };
  // }]);

  // app.controller('portfolioCtrl', ['projectFactory', function(projectFactory){
  //   this.projects = projectFactory.projects;

  app.controller('portfolioCtrl', ['$scope', '$http', function($scope, $http){
    var portfolio = this;
    $http.get('data/projects.json').success(function(data){
      portfolio.projects = data;
    });

    this.currentProject = 0;

    this.showProject = function(index){
      this.currentProject = index + 1;
    };

    this.checkProject = function(index){
      return this.currentProject === index + 1;
    };

    this.projectDescription = function(index){
      return this.projects[index].description;
    };
  }]);

})();
