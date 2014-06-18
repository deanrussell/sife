// jQuery for sife!

$(document).ready(function(){
	$("#notes-buttonID, #arrowId").click(function(){
        $("#panel-coverId").toggleClass("move-panel-cover");
        $("#panel-main__innerId").toggleClass("move-panel-main__inner");
        $("#arrowId").toggleClass("arrow__wrapper");
    });
    $("#arrowId").hover(function(){
    	$("#arrow__aId").toggleClass("arrow_border");
    })
});


/* var d = document.getElementById("panel-coverId");
d.className = d.className + " move-panel-cover"; */

/*transform: 'translateX(-50%)',
        	WebkitTransform: 'translateX(-50%)',
        	transition: 'all 0.75 ease-in',
        	WebkitTransition: 'all 0.75 ease-in'*/