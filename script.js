/*Handle requests from background.html*/
function handleRequest(
	//The object data with the request params
	request, 
	//These last two ones isn't important for this example, if you want know more about it visit: http://code.google.com/chrome/extensions/messaging.html
	sender, sendResponse
	) {
	if (request.callFunction == "toggleSidebar")
		toggleSidebar();
}
chrome.extension.onRequest.addListener(handleRequest);

function getSelectionText(){
    var selectedText = "";
    if (window.getSelection){ // all modern browsers and IE9+
        selectedText = window.getSelection().toString();
    }
    return selectedText;
}

function selectElementText(el){
    var range = document.createRange(); // create new range object
    range.selectNodeContents(el); // set range to encompass desired element text
    var selection = window.getSelection(); // get Selection object from currently user selected text
    selection.removeAllRanges(); // unselect any user selected text (if any)
    selection.addRange(range); // add range to Selection object to select it
}

function copySelectionText(){
    var copysuccess; // var to check whether execCommand successfully executed
    try{
        copysuccess = document.execCommand("copy"); // run command to copy selected text to clipboard
    } catch(e){
        copysuccess = false;
    }
    return copysuccess;
}

/*Small function wich create a sidebar(just to illustrate my point)*/
var sidebarOpen = false;
function toggleSidebar() {
	if(sidebarOpen) {
		$('body').css({
    		'padding-right': '0%'
  		});
		var el = document.getElementById('mySidebar');
		el.parentNode.removeChild(el);
		sidebarOpen = false;
	}
	else {
		$('body').css({
    		'padding-right': '30%'
  		});

		var sidebar = document.createElement('div');
		function prepareFrame() {
			ifrm = document.createElement("IFRAME");
			ifrm.setAttribute("src", "panel.html");
			ifrm.style.width = 640+"px";
			ifrm.style.height = 480+"px";
			ifrm.style.cssfloat="inherit";
			sidebar.appendChild(ifrm);
		}
 
		document.body.addEventListener('keypress', function(e){
		    var key = e.which || e.keyCode;
		    if (key === 13) {
		        var copysuccess = copySelectionText();
		    }

		}, false);
		prepareFrame();
		sidebar.id = "mySidebar";

		sidebar.style.cssText = "\
			position:fixed;\
			top:0px;\
			right:0px;\
			width:30%;\
			height:100%;\
			background:white;\
			box-shadow:inset 0 0 1em black;\
			z-index:999999;\
		";

		document.body.appendChild(sidebar);
		sidebarOpen = true;
	}
}