var researchGalaxy = angular.module( 'researchGalaxy', [
  'templates-app',
  'templates-common',
  'researchGalaxy.home',
  'researchGalaxy.projects',
  'researchGalaxy.members',
  'researchGalaxy.about',
  'researchGalaxy.create-project',
  'researchGalaxy.log-in',
  'researchGalaxy.sign-up',
  'ui.router'
])

.config( function myAppConfig ( $stateProvider, $urlRouterProvider ) {
  $urlRouterProvider.otherwise( '/' );
})

.run( function run () {
})

.controller( 'AppCtrl', function AppCtrl ( $scope, $location ) {
  $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
    if ( angular.isDefined( toState.data.pageTitle ) ) {
      $scope.pageTitle = 'Research Galaxy - ' + toState.data.pageTitle  ;
    }
  });
})

.directive("divWithGutter", function(){
  return{
    restrict: 'AE',
    transclude: true,
    templateUrl: 'directives/div-with-gutter.tpl.html'
  };
})

.directive("navbar", function(){
  return{
    restrict: 'AE',
    transclude: true,
    templateUrl: 'navbar/navbar.tpl.html'
  };
})

.directive("jumbotron", function(){
  return{
    restrict: 'AE',
    transclude: true,
    templateUrl: 'jumbotron/jumbotron.tpl.html'
  };
})

.directive("projectsSection", function(){
  return{
    restrict: 'AE',
    templateUrl: 'projects-section/projects-section.tpl.html'
  };
})

.directive("projectCard", function(){
  return{
    restrict: 'AE',
    templateUrl: 'project-card/project-card.tpl.html'
  };
})

.directive("progressBar", function(){
  return {
    restrict: 'E',
    template: "<div class='progress-bar'><div></div></div>"
  };
})

;

