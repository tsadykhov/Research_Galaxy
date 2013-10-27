angular.module( 'researchGalaxy', [
  'templates-app',
  'templates-common',
  'researchGalaxy.home',
  'researchGalaxy.about',
  'ui.router'
])

.config( function myAppConfig ( $stateProvider, $urlRouterProvider ) {
  $urlRouterProvider.otherwise( '/home' );
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

.directive("projectsSection", function(){
  return{
    restrict: 'AE',
    templateUrl: 'directives/projects-section.tpl.html'
  };
})

.directive("projectCard", function(){
  return{
    restrict: 'AE',
    templateUrl: 'directives/project-card.tpl.html'
  };
})

;

