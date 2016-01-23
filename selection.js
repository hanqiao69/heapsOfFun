/*extracts selected words when you press enter key*/
function enter() {
  $(this).keypress(function(e){
      	if(e.which==015){
        	$selection = window.getSelection();
      		$toAdd = $selection.toString();
      		console.log($toAdd);
      		$(".nicEdit-main").append($toAdd);
      		$(".nicEdit-main").append("<br>");
      	}
    });
}

function clear() {
	$(".nicEdit-main").empty();
	$("#NicEdit").empty();

}

