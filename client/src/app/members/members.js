angular.module( 'researchGalaxy.members', [
  'ui.router',
  'placeholders',
  'ui.bootstrap'
])

.config(function config( $stateProvider ) {
  $stateProvider
  .state( 'members', {
    url: '/members',
    templateUrl: 'members/members.tpl.html',
    data:{ pageTitle: 'Members' }
  });
})

;
