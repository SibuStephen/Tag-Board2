'use strict';

var tagboardController = angular.module('tag-board', []);

tagboardController.controller('tagboardCtrl', ['$http','$scope',

  function ($http, $scope) {

  $http.get('controller/tabledata.json').success(function(data) {


    $scope.tag_list = data;

    for (var i = $scope.tag_list.length - 1; i >= 0; i--) {
      var $this = $scope.tag_list[i];

      if ($this.tag_name < $this.upper_value) {
        $this.classed = 'green';
        $this.class_icon = 'fa-sort-asc';
      }
      else if ($this.tag_name > $this.upper_value) {

        $this.classed="red";
        $this.class_icon = 'fa-sort-desc';
      }

      else {
        $this.classed="black";

      }
    }

});

}]);

// tagboardController.controller('listagCtrl', ['$http','$scope',
//   function ($http, $scope) {
//  $http.get('controller/table-description.json').success(function(data){
//     $scope.tag_lists_data=data;
//    });
// }]);

// tagboardController.controller('valueCtrl',function ($http , $scope , tagboardCtrl){
//  (function(tagboardCtrl ,data, tagboardCtrl){
//     $scope.tag-lists=data;
//     $scope.tag-lists.to_int();
//     return $scope.tag-lists;
//  });

