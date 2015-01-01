angular.module('bina.directives')

.directive('atomSpinner', [
  function(){
    return {
      restrict: 'EA',
      scope: {},
      templateUrl: 'atomSpinner.html'
    };
  }
])
