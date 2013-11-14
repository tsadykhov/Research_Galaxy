angular.module( 'researchGalaxy.create-project', [
  'ui.router',
  'placeholders',
  'ui.bootstrap'
])

.config(function config( $stateProvider ) {
  $stateProvider
  .state( 'create-project', {
    url: '/createproject',
    templateUrl: 'create-project/create-project.tpl.html',
    data:{ pageTitle: 'Create Project' }
  });
})


.controller( 'AboutCtrl', function AboutCtrl( $scope ) {
  // This is simple a demo for UI Boostrap.
  $scope.dropdownDemoItems = [
    "The first choice!",
    "And another choice for you.",
    "but wait! A third!"
  ];
})

;
