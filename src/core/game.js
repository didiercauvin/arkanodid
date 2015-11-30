exports.init = function(width, height) {
	var canvas = document.getElementById('game-canvas');
	var context = canvas.getContext('2d');

	canvas.width = width;
	canvas.height = height;

	context.font = 'italic 40pt Calibri';
	context.fillText('Hello World!', 150, 100);
}