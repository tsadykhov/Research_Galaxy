/**
 * Each section of the site has its own module. It probably also has
 * submodules, though this boilerplate is too simple to demonstrate it. Within
 * `src/app/home`, however, could exist several additional folders representing
 * additional modules that would then be listed as dependencies of this one.
 * For example, a `note` section could have the submodules `note.create`,
 * `note.delete`, `note.edit`, etc.
 *
 * Regardless, so long as dependencies are managed correctly, the build process
 * will automatically take take of the rest.
 *
 * The dependencies block here is also where component dependencies should be
 * specified, as shown below.
 */
angular.module( 'researchGalaxy.projects', [
  'ui.router',
  'ui.bootstrap'
])

/**
 * Each section or module of the site can also have its own routes. AngularJS
 * will handle ensuring they are all available at run-time, but splitting it
 * this way makes each module more "self-contained".
 */
.config(function config( $stateProvider ) {
  $stateProvider
  .state( 'projects', {
    url: '/projects',
    templateUrl: 'projects/projects.tpl.html',
    controller: 'ProjectsSearchCtrl',
    data:{ pageTitle: 'Projects' }
  });
})

/**
 * And of course we define a controller for our route.
 */
.controller ('ProjectsSearchCtrl', function ProjectsController($scope) {
  $scope.fields1 = [
    {
      'name': 'Keyword',
      'width': 3
    },
    {
      'name': 'Title',
      'width': 3
    },
    {
      'name': 'Country',
      'width': 3
    },
    {
      'name': 'City',
      'width': 3
    },
    {
      'name': 'State',
      'width': 3
    },
    {
      'name': 'Zip',
      'width': 3
    }
  ];
  $scope.fields2 = [
    {
      'name': 'University',
      'width': 5
    },
    {
      'name': 'Area of Interest',
      'width': 5
    },
    {
      'name': 'Lead Researchers',
      'width': 5
    },
    {
      'name': 'Other Researchers',
      'width': 5
    },
    {
      'name': 'Project Goals',
      'width': 5
    }
  ];
})

;