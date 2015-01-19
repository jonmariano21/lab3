'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("Javascript is connected");
		
		// Slide 45
		$("#testjs").text("Mariano");
		
		// Slide 48
		//$(".jumbotron p").addClass("active");
		
		// Slide 50
		$(".jumbotron p").toggleClass("active");

	});
	

	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
	$("a.thumbnail").click(projectClick); // Slide 29
	
	$("#submitBtn").click(updateProject);  		
	
}

function updateProject(e) {
    var projectID = $('#project').val();
	$(projectID).animate({
      	width: $('#width').val()
     });

	 var newText = $('#description').val();
	 $(projectID + " .project-description").text(newText);
}


// Slide 30
function projectClick(e) {

	console.log("Inside projectClick -- Project clicked");
    // prevent the page from reloading

    e.preventDefault();
    // In an event handler, $(this) refers to

    // the object that triggered the event
	
	// Slide 38 - 40
	var projectTitle = $(this).find("p").text();
	var jumbotronHeader = $(".jumbotron h1");
	jumbotronHeader.text(projectTitle);

    //$(this).css("background-color", "#7fff00");
    
    // Slide 44
    var containingProject = $(this).closest(".project");

    var description = $(containingProject).find(".project-description");
    if (description.length == 0) {

       $(containingProject).append("<div class='project-description'><p>Description of the project.</p></div>");

    } else {

       //description.html("<p>Stop clicking on me! You just did it at " + (new Date()) + "</p>");
       
       // Slide 52
       //$("#myelement").hide();
       //$("#myelement").show();
       //$("#myelement").fadeIn();
       //$("#myelement").fadeOut();


    }
}