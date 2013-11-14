angular.module( 'researchGalaxy.sign-up', [
  'ui.router',
  'placeholders',
  'ui.bootstrap'
])

.config(function config( $stateProvider ) {
  $stateProvider
  .state( 'sign-up', {
    url: '/signup',
    templateUrl: 'sign-up/sign-up.tpl.html',
    data:{ pageTitle: 'Sign Up' }
  });
})

;
