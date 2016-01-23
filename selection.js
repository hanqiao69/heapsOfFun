/*extracts selected words when you press enter key*/
$(document).ready(function() {
  $(this).keypress(function(e){
      if(e.which==015){
          $selection = window.getSelection();
      }
    });
});
