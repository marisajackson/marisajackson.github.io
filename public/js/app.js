(function(){

  'use strict';

  var app = angular.module('portfolio', []);

  // app.factory('projectFactory', ['$http', function($http){
  //   $http.get('data/projects.json').success(function(data){
  //     var projects = data;
  //     return {projects: projects};
  //   });
  //   return {};
  // }]);

  app.directive('navbar', [function(){
    return {
      restrict: 'E',
      templateUrl: 'partials/navbar.html'
    };
  }]);

  app.directive('project', [function(){
    return {
      restrict: 'E',
      templateUrl: 'partials/project.html'
    };
  }]);

  // app.controller('projectCtrl', ['projectFactory', '$scope', function(projectFactory, $scope){
  app.controller('projectCtrl', ['$scope', '$http', function($scope, $http){
    // // var projects = [];
    // $scope.projects = projectFactory.projects;
    $http.get('data/projects.json').success(function(data){
      $scope.projects = data;
    });

    // this.projects = projectFactory.projects;
    // console.log(projectFactory);
    // console.log(this.projects);
  }]);

})();
