/*extracts selected words when you press enter key*/
function enter() {
	$times = 0;
  $(this).keypress(function(e){
      	if(e.which===015){

        	$selection = window.getSelection();
      		$toAdd = $selection.toString();
      		console.log($toAdd);
      		if ($times === 0) {
      			$(".nicEdit-main").children().remove();
      			$(".nicEdit-main").append("<ul id = \"startList\"> <li>" +$toAdd + "</li></ul>");
      			$(".nicEdit-main").append("<br>");
      		}
      		else {
      			$("#startList").append("<li>" +$toAdd + "</li>");
      		}
      		$times = 1;
      		

      	}
    });
}
/*not working yet*/
function tab() {
  $times = 0;
  $(this).keypress(function(e){
      	if(e.which===011){
      		console.log("tab");
      		$(".nicEdit-main").append("<ul> </ul>");
      		
      	}
    });
}

function clear() {
	$(" .nicEdit-main").empty();
	$("#NicEdit").empty();
}

function submitText() {
	$textVal = $(".mdl-textfield__input").val();
	$("#input-text").before("<br>");
	$("#input-text").before($textVal);
	// $(".mdl-textfield__input").empty();
  $('#text-box').val('');
  // document.getElementById("text-box").value = '';
}

function resetText() {
  $('#text-box').val('');
}
