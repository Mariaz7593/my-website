
/*
    --------------------------------
    Text styling for the work thumb
    --------------------------------
*/
var timeout;

var workDescription = "I have just started work on my projects so it will be lonely here. However please follow up the link to see the projects I am working on.";

var developerDescription = "Being software developer is like holding a magic wand, you are limited only by your skills and imagination...";

var sportDescription = "Who said there shouldn't be place for hobbies in the portfolio. Over lifetime this is something we can build up, improve and share. Let me share my passion...";

var experienceDescription = "Professional experience is what we achieve , contain and develop over the lifetime. Follow up the link to find more about mine...";


$("#workContainer").mouseenter(
    function(){
        timeout = setTimeout(function () {
            $("#sectionTitle").delay(2000).css("opacity", "1");
            $("#sectionTitle").text("My Work...");
            $("#thumbDescription").text(workDescription);
            $("#thumbDescription").css("opacity", "1");
        }, 500);
    }
);

$("#workContainer").mouseleave(
    function() {
        $("#sectionTitle").css("opacity", "0");
        $("#thumbDescription").css("opacity", "0");
    }
);

/*
-----------------------------------
    Styling for sport thumb
    -------------------------------
*/
$("#sportContainer").mouseenter(
    function() {
        timeout = setTimeout(function(){
            $("#sectionTitle").css("opacity", "1");
            $("#sectionTitle").text("Sport...");
            $("#thumbDescription").text(sportDescription);
            $("#thumbDescription").css("opacity", "1");
        }, 500);
       
    }
);

$("#sportContainer").mouseleave(
    function() {
        if(timeout != null){
            clearTimeout(timeout);
            timeout = null;
        }
        $("#sectionTitle").css("opacity", "0");
        $("#thumbDescription").css("opacity", "0");
    }
);

/*
    -----------------------------
    Styling for developer thumb
    ------------------------------
*/
$("#developerContainer").mouseenter(
    function() {
        timeout = setTimeout(function(){
            $("#sectionTitle").css("opacity", "1");
            $("#sectionTitle").text("Software Developer...");
            $("#thumbDescription").text(developerDescription);
            $("#thumbDescription").css("opacity", "1");
        },500);
    }
);

$("#developerContainer").mouseleave(
    function() {
        $("#sectionTitle").css("opacity", "0");
        $("#thumbDescription").css("opacity", "0");
    }
);

/*
    -----------------------------
    Styling for experience thumb
    -----------------------------
*/
$("#experienceContainer").mouseenter(
    function() {
        timeout = setTimeout(function(){
            $("#sectionTitle").css("opacity", "1");
            $("#sectionTitle").text("Experience..."); 
            $("#thumbDescription").css("opacity", "1");
            $("#thumbDescription").text(experienceDescription);
        }, 500); 
    }
);

$("#experienceContainer").mouseleave(
    function() {
        $("#sectionTitle").css("opacity", "0");
        $("#thumbDescription").css("opacity", "0");
    }
);