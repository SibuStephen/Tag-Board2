// moongoose = require('mongoose');
// var imports = require('model.js');

  function console_print(variables)
  {
   console.log(variables);
  }

  'use strict';

 // tags = moongoose.connect('mongodb://localhost/Tag_list');

 var tagboardController = angular.module('tag-board', [])

    .controller('tagboardCtrl',['$scope','$http',

      function ($scope,$http) {

        $http.get('/index').success(function(data) {
        $scope.tag_list = data;
      });
    }])

  // console.log(tag_list);

  tagboardController.directive('tagUpdate', ['$interval', function($interval) {
    function updateTile(tiles) {
      tiles.each(function() {

        var $this = $(this);
        var $value = $this.find('.detail_tag_name');
        var $icon = $this.find('.tag-details .fa');
        // var $setting = $this.find('.fa fa-cog');
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

  tagboardController.directive('MyController', ['$scope', function($scope) {

    $scope.show=function()
  {

   var button1 =document.getElementById("modal_search_hidden");
   var button2 =document.getElementById("modal_search_hidden");

   button1.style.display="block";
   button2.style.opacity=1;
  };

}])

/***** Directive not working ***/
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

// .directive('showShowing',['$show','$scope', function($show){

//    $scope.clickShow = function(){

//   function show(buttons)
//   {
//     buttons.style.display="block";
//     buttons.style.opacity=1;
//   }
// }
// return {

//   link: $show(function(){

//     button1 = document.getElementById("modal_search_hidden");
//     show(button1);

//   })
// }
// }])


tagboardController.controller('ShowController', ['$scope', function($scope) {

  $scope.show = function() {

    var  button1 = document.getElementById("modal_search_hidden");
    button1.style.display="block";
    button1.style.opacity=1;
    document.getElementById("main-change").style.opacity=0.1;
  };
}])

tagboardController.controller('hideSection',['$scope',function($scope){

 $scope.hide = function()
 {

   var  button = document.getElementById("modal_search_hidden");
      button.style.display="none";
      button.style.opacity=1;
   document.getElementById("main-change").style.opacity=1;
 };
}])

tagboardController.controller('settingShow',['$scope',function($scope){

 $scope.settings = function()
 {

   var  button = document.getElementById("modal_settings_hidden");
      button.style.display="block";
      button.style.opacity=1;
   document.getElementById("main-change").style.opacity=0.1;
 };
}])

tagboardController.controller('settingHide',['$scope',function($scope)
{
  $scope.settinghide = function()

{
  var  button = document.getElementById("modal_settings_hidden");
      button.style.display="none";
      button.style.opacity=0.1;
   document.getElementById("main-change").style.opacity=1;
 };
}])

tagboardController.controller('displayList',['$scope',function($scope)
{

 $scope.searchText = function(){
  var forms = form_search_section.elements["search"].value;
    if(forms == "not found")
    {
      document.getElementById("not-found").style.display="block";
      document.getElementById("found").style.display="none";
    }
      if (forms==" "){
      document.getElementById("not-found").style.display="none";
      document.getElementById("found").style.display="none";
    }
    else if (forms = "found"){
      document.getElementById("found").style.display="block";
      document.getElementById("not-found").style.display="none";
    }
 };
}])

tagboardController.controller('logout',['$scope',function($scope)
 {

   $scope.logout=function()
  {
    window.location="login.html";
  };
}])

tagboardController.controller('logiCtrl',['$scope',function($scope){

 $scope.login=function($event)

 {

  var form1 = document.getElementsByName("form1");

   if(form1.address.value =="Sibu" && form1.Password1.value=="srijan123")

       {

        form1.location="index.html";

       }

       else

       {
        alert("Invalid it is");
       }
 };
}])

