$(function(){
	var current_li;
	$("#portfolio img").click(function(){
		var src = $(this).attr("src");
		/*don't know the use of attr parent*/
		current_li=$(this).parent();
		$("#frame img").attr("src",src);
		$("#frame").fadeIn();
		$("#overlay").fadeIn();
	});
	$("#close").click(function(){
		$("#overlay").fadeOut();
		$("#frame").fadeOut();
	});
	
	$("#right").click(function(){
		if(current_li.is(":last-child"))
		{
			var next_li=$("#portfolio li").first();
		}
		else
		{
			next_li=current_li.next();
		}
		var next_src=next_li.children("img").attr("src");
		$("#frame img").attr("src",next_src);
		current_li=next_li;
	});
	$("#left").click(function(){
		if(current_li.is(":first-child"))
		{
			var prev_li=$("#portfolio li").last();
		}
		else
		{
			prev_li=current_li.prev();
		}
		var prev_src=prev_li.children("img").attr("src");
		$("#frame img").attr("src",prev_src);
		current_li=prev_li;
	});
	$("#left").mouseover(function(){
		$(this).css("opacity","0.5");
	});
	$("#left").mouseleave(function(){
		$(this).css("opacity","0.83");
	});
	$("#right").mouseover(function(){
		$(this).css("opacity","0.5");
	});
	$("#right").mouseleave(function(){
		$(this).css("opacity","0.83");
	});
	/*$("#frame img").mouseover(function(){
		$(this).css("box-shadow","3px 4px 2px grey");
		$(this).css("opacity","2.0");
	});
	$("#frame img").mouseleave(function(){
		$(this).css("opacity","0.80");
		$(this).css("box-shadow","1px 1px 1px black");
	});*/
});