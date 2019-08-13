$(function() {
  $("button").click(function(){
    $(this).html('X');

    $(this).click(function(){
      $(this).html('O');

    });
  });
});
