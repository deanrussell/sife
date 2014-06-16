// JavaScript for sife!

$(document).ready(function(){
	$("#notes-buttonID").click(function(){
        $("#panel-coverId").toggleClass("move-panel-cover");
        $("#panel-main__innerId").toggleClass("move-panel-main__inner");
    });
});

/* var d = document.getElementById("panel-coverId");
d.className = d.className + " move-panel-cover"; */