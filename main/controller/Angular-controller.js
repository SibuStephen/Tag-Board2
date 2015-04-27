function console_print(variables)
  {
   c(variables);
  }

  'use strict';


 var tagboardController = angular.module('tag-board', [])


    tagboardController.controller('tagboardCtrl',['$scope','$http',

      function ($scope,$http) {

    t1 = '';
    t2 = '';
    sum = '';
    sums = '';
    tage = '';

    var rdata = {};

      $http.get('/index').success(function(data)
      {
          // rdata.mongo = data;
        $scope.tag_list = data;
      });

      }])

  tag_list = '';

  fore = {};
  tiles ='';
  ft = 0;
  current_value = '';
  icons = '';
  tre = 0;
  this_value= '';
  tagboardController.directive('tagUpdate', ['$interval','$http', function ($interval,$http)
{
     $http.get('/index').success(function(data)
  {
          // rdata.mongo = data;
      fore = data;

      tagLists(fore);

    function tagLists(tags)

    {

      t =0 ;

      for(t=0; t < tags.length;t++)

        {

          fet = tags[t].tag_name;

          console.log(fet);

            current = document.getElementsByClassName(".asc-sort .detail_tag_name");

            console.log(this.current);

            for(r = 0 ;r<current.length; r++)
            {
                h = current[r].innerHTML;

            }
            console.log(h);
          $current = $this.find('.detail_tag_name');

          // console.log($this.$current);
          // localStorage.setItem("values",$current);

          // $updated_value = fet;

          // $current_value = localStorage.getItem("values");

          var $current_value = $current.text();

            $current.text(fet);

            console.log($current_value);

            console.log($current.text(fet));
        }

         // console.log($this.$current);

           $icon = $this.find('.tag-details .fa');

            // console.log($icon);

           // $current_value = $value.text();

          if ($current_value < $this.$updated_value)
          {
            if ($icon.hasClass('fa-sort-asc'))
            {
              $icon.removeClass('fa-sort-asc');
            }

            $icon.addClass('fa-sort-desc');
          }

          else if ($current_value > $this.$updated_value)
          {
            if ($icon.hasClass('fa-sort-desc'))
            {
              $icon.removeClass('fa-sort-desc');
            }
            $icon.addClass('fa-sort-asc');
          }



//         if (this_current_value > fet)

//         {


//         Element.prototype.hasClass = function(className) {
//         return this.className && new RegExp("(^|\\s)" + className + "(\\s|$)").test(this.className);
//         };

//         icons = document.getElementsByClassName("asc-sort");

//           if (icons.hasClass('fa'))

//           {
//              console.log("inside");
//              // icons.remove('fa-sort-asc');

//           }

//           // icons.add('fa-sort-desc');
//         }

//         // else if (current_value < fet)

//         // {

//         //   if (icons.contains('fa-sort-desc'))

//         //   {
//         //     icons.remove('fa-sort-desc');
//         //   }

//         //   icons.add('fa-sort-asc');
//         // }

    }

  });


}]);

      //   $current_id_comparision = $scope.tag_list;


      //   $http.get('/controller/tags_names.json').success(function(datae) {
      //     rdata.json = datae;
      //   });
      // });

      // rdata.mongo.each(function() {
      //   $mongo = $(this);
      //   rdata.json.each(function() {
      //     $json = $(this);
      //     if ($mongo.tag_id == $json.tag_id) {
      //       $mongo.tag_name = $json.tag_name;
      //     }
      //   });
      // });

      //   $scope.tag_list = rdata.mongo;

      //  for( j=0; j < datae.length; j++)

      //  {
      //     tag1 = JSON.stringify(datae[j]);
      //     t1 = JSON.parse(tag1);

      //     var yolo =[t1.tag_id];
      //     var ta = [t1.tag_name];

      //     tage = ta;
      //     sum += yolo;
      //  }

      //   // sd = JSON.stringify(sum);
      //   // dr = JSON.parse(sd);
      //   console.log(sum.split(','));

      //   for( k=0; k < data.length; k++)
      //   {

      //      tag2 = JSON.stringify(data[k]);
      //      t2 = JSON.parse(tag2);
      //      var doubleYolo = [t2.tag_id];
      //      sums += doubleYolo;
      //   }

      //        if ( sum == sums)
      //        {

      //           $scope.genius = tage;

      //            console.log("i'm insise");
      //        }
      //      // });
      //      // }

      // });

 // tiles = $('.tile');
      //   tiles.each(function() {

      //    for( $i =0; $i < $scope.tag_list.length;$i++)

      //    {

      //    $database_upper_value = JSON.stringify($current_id_comparision[$i].upper_value);
      //    $database_lower_value = JSON.stringify($current_id_comparision[$i].lowervalue);

      //    }
      //      console.log($database_upper_value);

      //       // $this = $(this);
      //       $value = tiles.find('.detail_tag_name');
      //       $icon  = tiles.find('.tag-details .fa');
      //       $color = tiles.find('.b-color-');
      //       $current_value = $value.text();

      //   console.log($current_value);

      //  if($database_upper_value == $current_value)
      //  {
      //    if (($current_value > $database_upper_value))
      //    {
      //       $color.css('color','red');
      //       $icon.removeClass('fa-sort-asc');
      //       $icon.addClass('fa-sort-desc');
      //     }

      //     else
      //     {
      //       $icon.addClass('fa-sort-desc');
      //     }
      //   }

      //   else if ($current_value < $database_upper_value)
      //   {

      //     if ($icon.hasClass('fa-sort-asc'))

      //     {
      //       $icon.removeClass('fa-sort-asc');
      //       $color.css('color','green');
      //     }

      //    else

      //    {

      //     $icon.addClass('fa-sort-desc');

      //     }
      //   }
      //   else if ($current_value > $database_lower_value)
      //   {

      //     if ($icon.hasClass('fa-sort-asc'))

      //     {

      //       $icon.removeClass('fa-sort-asc');
      //       $icon.addClass('fa-sort-desc');
      //       $color.css('color','red');
      //     }

      //    else
      //     {

      //      $icon.addClass('fa-sort-desc');

      //     }
      //   }

      // });

   //    });

   // }]);



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

  tagboardController.controller('settingHide',['$scope',
    function ($scope)
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
   $http.get('/controller/tags.json').success(function(datas)
 {
     $scope.json_tags = datas;

     $scope.searchTexts = function()
   {

       form_search_sections = document.getElementById("form_search_section");

       formse = form_search_sections.elements["search"].value;

        ft = JSON.stringify(datas);
        tryed = JSON.parse(ft);

        for(var i = 0 ;i< tryed.length;i++)
        {

        console.log();

          if (formse == tryed[i].tag_id)
          {


            document.getElementById("found").style.display="block";

          }

         else if (formse != tryed[i].tag_id)
          {
             document.getElementById("not-found").style.display="none";
             document.getElementById("found").style.display="none";
          }
      }
    };


  });

   $scope.sendData = function(events){

    var eventsone = {

                "Unit": events.Unit ,
              "tag_id": events.tag_id,
          "lowervalue": events.lowervalue,
            "tag_name": events.tag_name,
               "time" : events.time,
        "upper_value" : events.upper_value,
         "class_icon" : events.class_icon,
            "classed" : events.classed

         }

         datas = JSON.stringify(eventsone);
         console.log(events);

         request = $.ajax({

                method: "post",
                url: "/store.json",
                data: datas,
                dataType: "json",
                contentType: "application/json; charset=UTF-8",
                crossDomain:true,
              });
    }

 $scope.redirect = function(events){


    textboxUpper = document.getElementById("ups");
    textboxLower = document.getElementById("lw");
    header_value = document.getElementByClassName("tile-header");

    value_upper  =  textboxUpper.value;
    value_lower  =  textboxLower.value;
    value_header = header_value.value;

    console.log(value_header);

    var values_upper_lower = {

          "tag_id"     : events.tag_id,
          "lowervalue" : events.value_lower,
         "upper_value" : events.value_upper
    }

   upper_lower = JSON.stringify(values_upper_lower);

    console.log(upper_lower);

     request_values = $.ajax({

          method:"post",
          url:"/stores.json",
          data: upper_lower,
          dataType: "json",
          contentType: "application/json; charset=UTF-8",
          crossDomain:true
    });

    console.log(request_values);
  }

}]);


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

