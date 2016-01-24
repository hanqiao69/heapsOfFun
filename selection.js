/*extracts selected words when you press enter key*/
function h_yellow() {
	$times = 0;
 $(this).keypress(function(e){
   if(e.which===121){ //015 for enter
     $selection = window.getSelection();
     $toAdd = $selection.toString();
     if ($toAdd) {
       console.log($toAdd);
       if ($times === 0) {
       	$(".nicEdit-main").attr('id', 'NicEditMain');
        $(".nicEdit-main").children().remove();
        $(".nicEdit-main").append("<ul id = \"startList\"> <li>" +$toAdd + "</li></ul>");
        $(".nicEdit-main").append("<br>");
      }
      else {
        $("#startList").append("<li>" +$toAdd + "</li>");
      }
      $times = 1;
    }
    highlight_yellow($selection.getRangeAt(0));

  }
});
}

function h_green() {
  $times = 0;
 $(this).keypress(function(e){
   if(e.which===103){
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
    highlight_green($selection.getRangeAt(0));

  }
});
}

function highlight_yellow(selection) {
	$newDiv = document.createElement("div");
	$newDiv.setAttribute(
		"style",
   		"background-color: yellow; display: inline;"
   	);
  	selection.surroundContents($newDiv);
}

function highlight_green(selection) {
  $newDiv = document.createElement("div");
  $newDiv.setAttribute(
    "style",
   "background-color: green; display: inline;"
   );
  selection.surroundContents($newDiv);
}

function tab() {
	// if($(".nicEdit-main").is(":focus")) {
		console.log("yay");

 
	  	$(this).keypress(function(e){
	  		console.log(e.which);
	      	if(e.which===96){
	      		console.log("tab");
	      		$(".nicEdit-main").find("li").last().append("<ul> <li></li></ul>");
	      		//$("<ul>").append(".nicEdit-main").find("li").last();

	      	}
	      	if(e.which===49){
	      		console.log("tab");
	      		$(".nicEdit-main").find("li").last().remove();
	      		$(".nicEdit-main").find("li").last().append("<li>");
	      	}
	    });

	// }
}

function clear() {
	$(" .nicEdit-main").empty();
	$("#NicEdit").empty();
}

function submitText() {
  // var st = document.getElementById('submitted-text');
  $("#input-text").before("<br>");
  $textVal = $(".mdl-textfield__input").val();
  //$textVal = $textVal.replace("\n", "<br>");
  var para = document.createElement("p");
  var node = document.createTextNode($textVal);
  para.setAttribute("id", "yo");
  para.appendChild(node);
  var element = document.getElementById("submitted-text");
  element.appendChild(para);
  // st.appendChild($textVal);
	//$("#input-text").before($textVal);
	// $(".mdl-textfield__input").empty();
  $('#text-box').val('');
  // document.getElementById("text-box").value = '';
}

function resetText() {
  $('#submitted-text').empty();
}


 // Your Client ID can be retrieved from your project in the Google
  // Developer Console, https://console.developers.google.com
  var CLIENT_ID = '<628928302615-6bsd3as8err1mf4684dbf3pdhsl989jb.apps.googleusercontent.com>';

  var SCOPES = ['https://www.googleapis.com/auth/drive.metadata.readonly'];

  /**
   * Check if current user has authorized this application.
   */
  function checkAuth() {
    gapi.auth.authorize(
      {
        'client_id': CLIENT_ID,
        'scope': SCOPES.join(' '),
        'immediate': true
      }, handleAuthResult);
  }

  /**
   * Handle response from authorization server.
   *
   * @param {Object} authResult Authorization result.
   */
  function handleAuthResult(authResult) {
    var authorizeDiv = document.getElementById('authorize-div');
    if (authResult && !authResult.error) {
      // Hide auth UI, then load client library.
      authorizeDiv.style.display = 'none';
      loadDriveApi();
    } else {
      // Show auth UI, allowing the user to initiate authorization by
      // clicking authorize button.
      authorizeDiv.style.display = 'inline';
    }
  }

  /**
   * Initiate auth flow in response to user clicking authorize button.
   *
   * @param {Event} event Button click event.
   */
  function handleAuthClick(event) {
    gapi.auth.authorize(
      {client_id: CLIENT_ID, scope: SCOPES, immediate: false},
      handleAuthResult);
    return false;
  }

  /**
   * Load Drive API client library.
   */
  function loadDriveApi() {
    gapi.client.load('drive', 'v3', listFiles);
  }

  /**
   * Print files.
   */
  function listFiles() {
    var request = gapi.client.drive.files.list({
        'pageSize': 10,
        'fields': "nextPageToken, files(id, name)"
      });

      request.execute(function(resp) {
        appendPre('Files:');
        var files = resp.files;
        if (files && files.length > 0) {
          for (var i = 0; i < files.length; i++) {
            var file = files[i];
            appendPre(file.name + ' (' + file.id + ')');
          }
        } else {
          appendPre('No files found.');
        }
      });
  }

  /**
   * Append a pre element to the body containing the given message
   * as its text node.
   *
   * @param {string} message Text to be placed in pre element.
   */
  function appendPre(message) {
    var pre = document.getElementById('output');
    var textContent = document.createTextNode(message + '\n');
    pre.appendChild(textContent);
  }


