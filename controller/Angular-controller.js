  'use strict';

  var tagboardController = angular.module('tag-board', [])

  .controller('tagboardCtrl', ['$http','$scope',
    function ($http, $scope) {
      $http.get('controller/tabledata.json').success(function(data) {
        $scope.tag_list = data;
      });
  }])

  .directive('tagUpdate', ['$interval', function($interval) {
    function updateTile(tiles) {
      tiles.each(function() {

        var $this = $(this);
        var $value = $this.find('.detail_tag_name');
        var $icon = $this.find('.fa');
        var $updated_value = Math.floor(Math.random()*1000);
        var $current_value = $value.text();
        // Update value.
        $value.text($updated_value);
        if ($current_value > $updated_value) {
          $value.css('color', 'green');
          if ($icon.hasClass('fa-sort-asc')) {
            $icon.removeClass('fa-sort-asc');
          }
          $icon.addClass('fa-sort-desc');
        }
        else if ($current_value < $updated_value) {
          $value.css('color', 'red');
          if ($icon.hasClass('fa-sort-desc')) {
            $icon.removeClass('fa-sort-desc');
          }
          $icon.addClass('fa-sort-asc');
        }
      });
    }
    return {
      link: $interval(function() {
        var tiles = $('.tile');
        updateTile(tiles);
       }, 3000)
    }
  }])

  .directive('MyController', ['$scope', function($scope) {

    $scope.show=function()
  {

  var button1 =document.getElementById("modal_search_hidden");
  var button2 =document.getElementById("modal_search_hidden");

  button1.style.display="block";
  button2.style.opacity=1;

 };

}])

// .directive('shows',['$show',function($show){

// function show(button1,button2,scope)
// {
//   scope.button1.style.display="block";
//   scope.button2.style.opacity=1;
// }
// return{
//   link: $show(function()
//   {
//     var button1 =document.getElementById("modal_search_hidden");
//     var button2 =document.getElementById("modal_search_hidden");
//     scope: {
//             eventHandler: '&ngClick'
//            }
//    show(button1,button2,scope);
//   })
// }
// }])

