angular.module( 'researchGalaxy.log-in', [
  'ui.router',
  'placeholders',
  'ui.bootstrap'
])

.config(function config( $stateProvider ) {
  $stateProvider
  .state( 'log-in', {
    url: '/login',
    templateUrl: 'log-in/log-in.tpl.html',
    data:{ pageTitle: 'Create Project' }
  });
})

;
