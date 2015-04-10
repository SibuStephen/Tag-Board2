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
        // $scope.tag_list.each(function() {

        // $this = $(this);
        //   if($current_value < uppervalue) {
        //       $this.color: 'green';
        //     }
        // });
        // });
        // $http.get('tags.json', function(data) {

        //   $tag = data[0];
        //   $http.post('/tag', $tag);

        });
    }])

  // console.log(tag_list);
  // .controller('range-setting',['$scope','$http',
  //    function ($scope,$http)
  //    {
  //     $this = ($this)
  //        $this.
  //    }
  //   ]);

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

tagboardController.controller('displayList',['$scope','$http',

  function ($scope,$http)
{
   $http.get('tags.json').success(function(datas)
 {
     $scope.json_tags = datas;
       $scope.searchTexts = function()
   {

       form_search_sections = document.getElementById("form_search_section");

       formse = form_search_sections.elements["search"].value;

        ft = JSON.stringify(datas)
        tryed = JSON.parse(ft);

        for(var i = 0 ;i< tryed.length;i++)
        {

        console.log();


          if (formse == tryed[i].tag_id)
          {


            document.getElementById("found").style.display="block";

          }

         else if (formse == "")
          {
             document.getElementById("not-found").style.display="none";
             document.getElementById("found").style.display="none";
          }
      }
    };
  });
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

