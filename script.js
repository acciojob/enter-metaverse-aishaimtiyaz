//your JS code here. If required.


function updateText(){
	var statusParagraph = document.getElementById("status");
	statusParagraph.textContent="";
	// Create an h1 element
	var resultHeading = document.createElement("h1");
	// Set the text content of the h1 element
	resultHeading.textContent = "Entered Metaverse";
	statusParagraph.appendChild(resultHeading);
}

