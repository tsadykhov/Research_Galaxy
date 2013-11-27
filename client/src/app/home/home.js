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
angular.module( 'researchGalaxy.home', [
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
  .state( 'home', {
    templateUrl: 'home/home.tpl.html',
    data:{ pageTitle: 'Home' }
  })
  .state( 'home.default', {
    url: '/',
    views: {
      "editor-picks@home": {
        templateUrl: 'projects-section/projects-section.tpl.html',
        controller: 'EditorPicksProjectCtrl'
      },
      "popular@home": {
        templateUrl: 'projects-section/projects-section.tpl.html',
        controller: 'PopularProjectCtrl'
      },
      "recent@home": {
        templateUrl: 'projects-section/projects-section.tpl.html',
        controller: 'RecentProjectCtrl'
      }
    }
  });
})

/**
 * And of course we define a controller for our route.
 */
.controller ('EditorPicksProjectCtrl', function EditorPicksProjectCtrl($scope) {
  $http.get('projects/editor-picks.json'.success(function(data) {
    $scope.projects = data;
  }
})

.controller ('PopularProjectCtrl', function PopularProjectCtrl($scope) {
  $scope.projects = [
    {
      'name': 'Emma 1',
      'description': 'My future wife',
      // 'imageUrl': 'http://images4.wikia.nocookie.net/__cb20130316163306/twobestfriendsplay/images/9/94/Emma_stone.jpg',//'images/test1.jpg'
      'progress': 80
    },
    {
      'name': 'Test project 2',
      'description': 'Test description',
      'progress': 60
    },
    {
      'name': 'Test project 3',
      'description': 'Test description',
      'progress': 40
    },
    {
      'name': 'Test project 4',
      'description': 'Test description',
      'progress': 20
    }
  ];
})

.controller ('RecentProjectCtrl', function RecentProjectCtrl($scope) {
  $scope.projects = [
    {
      'name': 'Emma project 1',
      'description': 'My future wife',
      // 'imageUrl': 'http://images4.wikia.nocookie.net/__cb20130316163306/twobestfriendsplay/images/9/94/Emma_stone.jpg',//'images/test1.jpg'
      'progress': 99
    },
    {
      'name': 'Test project 2',
      'description': 'Test description',
      'progress': 0
    },
    {
      'name': 'Test project 3',
      'description': 'Test description',
      'progress': 0
    },
    {
      'name': 'Test project 4',
      'description': 'Test description',
      'progress': 0
    }
  ];
})

;

