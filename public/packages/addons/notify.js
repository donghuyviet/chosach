var Notify = {};

Notify.showText = function(title , message){
	if (!("Notification" in window)) {
		alert("This browser does not support desktop notification");
	}else if (Notification.permission === "granted") {
		var notification = new Notification(title);
	}else if (Notification.permission !== 'denied') {
		Notification.requestPermission(function (permission) {
			if (permission === "granted") {
				var notification = new Notification(title);
			}
		});
	}
}

Notify.playSound = function(){
	$('<audio id="showSoundNotify"><source src="' + BASE_URL + 'uploads/notify/notify.ogg" type="audio/ogg"><source src="' + BASE_URL + 'uploads/notify/notify.mp3" type="audio/mpeg"><source src="' + BASE_URL + 'uploads/notify/notify.wav" type="audio/wav"></audio>').appendTo('body');
  	$('#showSoundNotify')[0].play();
}