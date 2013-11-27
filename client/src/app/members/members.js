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
    controller: 'MembersSearchCtrl',
    data:{ pageTitle: 'Members' }
  });
})

/**
 * And of course we define a controller for our route.
 */
.controller ('MembersSearchCtrl', function ProjectsController($scope) {
  $scope.fields1 = [
    {
      'name': 'Keyword',
      'width': 3
    },
    {
      'name': 'Email',
      'width': 3
    },
    {
      'name': 'Country',
      'width': 3
    },
    {
      'name': 'State',
      'width': 3
    },
    {
      'name': 'City',
      'width': 3
    },
    {
      'name': 'Zip',
      'width': 3
    }
  ];
  $scope.fields2 = [
    {
      'name': 'First Name',
      'width': 5
    },
    {
      'name': 'Last Name',
      'width': 5
    },
    {
      'name': 'Phone',
      'width': 5
    },
    {
      'name': 'Current University',
      'width': 5
    },
    {
      'name': 'Current Institution',
      'width': 5
    },
    {
      'name': 'Area of Interest',
      'width': 5
    }
  ];
})

;
