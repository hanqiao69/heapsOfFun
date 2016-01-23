/*extracts selected words when you press enter key*/
function enter() {
	$times = 0;
  $(this).keypress(function(e){
      	if(e.which===015){
  			$selection = window.getSelection();
      		$toAdd = $selection.toString();
      		if ($toAdd) {
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

      	}
    });
}

function tab() {
	// if($(".nicEdit-main").is(":focus")) {
		console.log("yay");
	  	$(this).keypress(function(e){
	  		console.log(e.which);
	      	if(e.which===96){
	      		console.log("tab");
	      		$("li").last().append("<ul> <li></li></ul>");
	      	}
	    });
	// }
}

function clear() {
	$(" .nicEdit-main").empty();
	$("#NicEdit").empty();
}

function submitText() {
  $("#input-text").before("<br>");
	$textVal = $(".mdl-textfield__input").val();
  $textVal = $textVal.replace("\n", "<br>");
	$("#input-text").before($textVal);
	// $(".mdl-textfield__input").empty();
  $('#text-box').val('');
  // document.getElementById("text-box").value = '';
}

function resetText() {
  $('#text-box').val('');
}


