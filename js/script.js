$(document).ready(function(){

var lifeVal;
var checkVal;

  $("button").on('click', function(){
    $(".welcome").hide(1000);
    $(".start").hide(1000);
    $(".sidenav").show(1000);
    $(".agenda").show(1000);
  });
  $(function(){
    $("#slider-1").slider({
      range: true,
      min: 0,
      max: 100,
      step: 10,
      slide: function(event, ui) {
        $("#q1").val(ui.values[0]);
      }
    });
    $("#q1").val("#slider-1").slider("values", 0);
  });
  // changing the colour of the menu text and list item based on radio button click
  //This seems to be a pretty ugly hack, however it gets the functionality I need
  //I will come back to this


  //Life Cover change
  $(function() {
    $("#list-life-cover").on('click', function () {
      lifeVal = $('#formSelect input:radio:checked').val();
      console.log("%s", lifeVal)

      var lifeMenu = $("#lifeCoverMenu").text();

      if(lifeVal === 'lifeTrue'){
        $("#list-life-cover").css({"background-color" : "green"});
        $("#lifeCoverMenu").css({"color" : "green"});
        $("li").remove('#lif');
      } else {
        $("#list-life-cover").css({"background-color" : "red"});
        $("#lifeCoverMenu").css({"color" : "red"});
        $("#newMenu").prepend('<li id="lif">' + lifeMenu + '</li>');
        }
      });
    });

  //cic change
  $(function() {
    $("#list-cic").on('click', function () {
      lifeVal = $('#formSelect input:radio:checked').val();
      console.log("%s", lifeVal)

      var cicMenu = $("#cicMenu").text();

      if(lifeVal === 'cicTrue'){
        $("#list-cic").css({"background-color" : "green"});
        $("#cicMenu").css({"color" : "green"});
        $("li").remove('#cic');
      } else {
        $("#list-cic").css({"background-color" : "red"});
        $("#cicMenu").css({"color" : "red"});
        //to keep the list in order
          if($("#lif").length) {
            $("#lif").after('<li id="cic">' + cicMenu + '</li>');
          } else if ($("#dis").length) {
            $("#dis #inc").before('<li id="cic">' + cicMenu + '</li>');
          } else {
            $("#newMenu").prepend('<li id="cic">' + cicMenu + '</li>');
          }
        }
      });
    });

    //Disability menu change
    $(function() {
      $("#list-dis").on('click', function () {
        lifeVal = $('#formSelect input:radio:checked').val();

        var disMenu = $("#disMenu").text();

        if(lifeVal === 'disTrue'){
          $("#list-dis, #disMenu").css({"background-color" : "green"});
          $("li").remove('#dis')
        } else {
          $("#list-dis, #disMenu").css({"background-color" : "red"});
          //to keep the list in order
            if($("#cic").length) {
              $("#cic").after('<li id="dis">' + disMenu + '</li>');
            } else if ($("#inc").length) {
              $("#inc #sav").before('<li id="dis">' + disMenu + '</li>');
            } else {
              $("#newMenu").append('<li id="dis">' + disMenu + '</li>');
            }
          }
        });
      });

      //Income protection change
      $(function() {
        $("#list-income").on('click', function () {
          lifeVal = $('#formSelect input:radio:checked').val();
          console.log("%s", lifeVal)

          var incMenu = $("#incomeMenu").text();

          if(lifeVal === 'incomeTrue'){
            $("#list-income").css({"background-color" : "green"});
            $("#incomeMenu").css({"color" : "green"});
            $("li").remove('#inc');
          } else {
            $("#list-income").css({"background-color" : "red"});
            $("#incomeMenu").css({"color" : "red"});
            //to keep the list in order
              if($("#dis").length) {
                $("#dis").after('<li id="inc">' + incMenu + '</li>');
              } else if ($("#sav").length) {
                $("#sav").before('<li id="inc">' + incMenu + '</li>');
              } else {
                $("#newMenu").append('<li id="inc">' + incMenu + '</li>');
              }
            }
          });
        });

        //the button to show the new menu and well
        $(function() {
          $("#createPlan").on('click', function (){
            $(".sidenav").hide(1000);
            $(".agenda").hide(1000);
            $("#plan-builder-nav").show(1000);
            $(".plan").show(1000);
          });
        });

});
