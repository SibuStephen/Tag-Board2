  'use strict';

  var tagboardController = angular.module('tag-board', []);

  tagboardController.controller('tagboardCtrl', ['$http','$scope','$interval',

    function ($http, $scope,$interval) {

      $http.get('controller/tabledata.json').success(function(data) {


        $scope.tag_list = data;

    //     for (var i =0; i < $scope.tag_list.length-1; i++){

    //      var updated_value = Math.floor(Math.random()*100);
    //      var this_value = $scope.tag_list[i];


    //      if (this_value.tag_name < updated_value){

    //       this_value.classed = 'green';
    //       this_value.class_icon = 'fa-sort-asc';
    //       this_value.tag_name = updated_value;

    //     }

    //     else if (this_value.tag_name > updated_value){

    //       this_value.classed = "red";
    //       this_value.class_icon = 'fa-sort-desc';
    //       this_value.tag_name = updated_value;

    //     }
    //   }

    //   console.log(this_value);
    //   console.log(updated_value);

    //    $scope.call = function(){

    //         this_value.tag_name;
    // }

    // $interval( function(){$scope.call();}, 500);

    });


    }]);


  <!-- -->

    // for (var i = $scope.tag_list.length - 1; i >= 0; i--) {
    //   var $this = $scope.tag_list[i];

    //   if ($this.tag_name < $this.upper_value) {
    //     $this.classed = 'green';
    //     $this.class_icon = 'fa-sort-asc';
    //   }
    //   else if ($this.tag_name > $this.upper_value) {

    //     $this.classed="red";
    //     $this.class_icon = 'fa-sort-desc';
    //   }

    //   else {
    //     $this.classed="black";

    //   }
    // }
