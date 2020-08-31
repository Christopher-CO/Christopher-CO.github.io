// JavaScript source code
/*
var $video = $(".video-hover-control");

$video.on('mouseenter focus', function(){
	$video.get(0).play();
});

$video.on('mouseout blur', function(){
	$video.get(0).pause();
});


var figure = $(".video-hover-control").hover(hovervid, hidevid);

function hovervid(e){
	$('video', this).get(0).play();
}
function hidevid(e){
	$('video', this).get(0).pause();
}

hoverVids[i].addEventListener('mouseenter', function(){hoverVids[i].play()}, false);
hoverVids[i].addEventListener('mouseout', function(){hoverVids[i].pause()}, false);
*/

window.onload=function(){

	const hoverVids = document.getElementsByClassName('portfolio-wrap');

	for(let i = 0; i < hoverVids.length; i++){
	
		if($('video', hoverVids[i].video) == null){
			continue;
		}

		hoverVids[i].addEventListener('mouseover', function(){this.getElementsByTagName('video')[0].play();}, false);
		hoverVids[i].addEventListener('mouseout', function(){this.getElementsByTagName('video')[0].pause();}, false);

		hoverVids[i].addEventListener('touchstart', function(){$('video', this.video).get(i).play();}, false);
		hoverVids[i].addEventListener('touchend', function(){$('video', this.video).get(i).pause();}, false);

		// Trying to make the video clickable and take you to the associated link
		hoverVids[i].addEventListener('click', function(){window.location = this.getElementsByTagName('a')[0].getAttribute("href");}, false);
	}
}
