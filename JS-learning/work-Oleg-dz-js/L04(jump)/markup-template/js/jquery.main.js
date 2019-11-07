jQuery(document).ready(function() {
	firstAn();
	secondAn();
});




//-------- -------- -------- --------
//-------- js custom end
//-------- -------- -------- --------
function firstAn() {
	let tl = new TimelineMax();
	let firsText = $('.firs-text');
	let secondText = $('.second-text');
	let secondTextAn = $('.second-text-an');

	tl.delay(2)
	.to(firsText, 1, { opacity: 0, onComplete: function() {
		firsText.addClass('js-hide');
		secondText.addClass('js-show');
	}})
	.to(secondText, 1, {opacity: 1, onComplete: function() {
		secondTextAn.addClass('swing');
	}});
}

function secondAn() {
	let tl2 = new TimelineMax();
	let startAnnBtn = $('.dino-start-btn a');
	let secondText = $('.second-text, .dino-start-img img');
	startAnnBtn.on('click', function() {
		event.preventDefault();
		tl2.to(secondText, 1, {
			opacity: 0,
			scale: 0.5,
			onComplete: function() {
				console.log(123);
			}
		})
	});
}
//-------- -------- -------- --------
//-------- included js libs start
//-------- -------- -------- --------


//-------- -------- -------- --------
//-------- included js libs end
//-------- -------- -------- --------