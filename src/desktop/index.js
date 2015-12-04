require('./desktop.css');
const angular = require('angular');

var ngModule = angular
  .module('da.desktop', [
    'ui.router',
    'ngAnimate',
    require('./services')(angular).name
  ])
  .constant('$', require('jquery'))
  .constant('d3', require('d3'))
  .constant('_', require('lodash'))
  .config($urlRouterProvider => {
    $urlRouterProvider.otherwise('/main');
  });
