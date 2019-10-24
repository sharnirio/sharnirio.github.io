document.addEventListener('DOMContentLoaded', function() {
	displaceInit(staffClassList);
	pageReload();
}, false);
//-------- -------- -------- --------
//-------- js custom start
//-------- -------- -------- --------

// tutorial https://abraxabra.ru/blog/prochee/greensock-for-beginners-a-tutorial-on-web-animation-part-1/
var staffClassList = [".salat", ".onion", ".chicken", ".tomato", ".cucumber", ".cheese", ".chips", ".bob", ".becon"]
var lastElArr = [];
var lastEl = [];

function displaceInit(arg) {
	let tl = new TimelineMax();
	let tl2 = new TimelineMax();
	function dragMoveListener(event) {
		var target = event.target
		// keep the dragged position in the data-x/data-y attributes
		var x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx
		var y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy
		// translate the element
		target.style.webkitTransform = target.style.transform = 'translate(' + x + 'px, ' + y + 'px)'
		// update the posiion attributes
		target.setAttribute('data-x', x)
		target.setAttribute('data-y', y)
	}
	// this is used later in the resizing and gesture demos
	window.dragMoveListener = dragMoveListener

	/* The dragging code for '.draggable' from the demo above
	 * applies to this demo as well so it doesn't have to be repeated. */
	// enable draggables to be dropped into this
	interact('.block-staffing').dropzone({
		// only accept elements matching this CSS selector
		accept: '.block-item:not(.block-btn):not(.burger)',
		// Require a 75% element overlap for a drop to be possible
		overlap: 0.1,
		// listen for drop related events:
		ondropactivate: function(event) {
			// add active dropzone feedback
			event.target.classList.add('drop-active')
		},
		ondragenter: function(event) {
			var draggableElement = event.relatedTarget
			var dropzoneElement = event.target
			// feedback the possibility of a drop
			dropzoneElement.classList.add('drop-target')
			draggableElement.classList.add('can-drop')
		},
		ondragleave: function(event) {
			// remove the drop feedback style
			event.target.classList.remove('drop-target')
			event.relatedTarget.classList.remove('can-drop')
		},
		ondrop: function(event) {
			var draggableElement = event.relatedTarget;
			var draggableElementData = draggableElement.getAttribute('data-veg');
			var staffElement = document.querySelector(".block-staffing .".concat(draggableElementData));
			lastElArr.push(draggableElement);
			lastEl = lastElArr[lastElArr.length - 1];
			console.log(lastElArr);

			$('.block-btn img').off('click')
			$('.block-btn img').on('click', function(){
				console.log(lastElArr[lastElArr.length - 1]);
				tl.to(lastEl, 0.4, { opacity: 1, scale: 1});
				lastElArr.pop();
				lastEl = lastElArr[lastElArr.length - 1];

			});

			draggableElement.classList.add('drops');
			tl.to(draggableElement, 0.4, { opacity: 0, scale: 0.3}).to(staffElement, 0.4, { opacity: 1, scale: 1});
			// event.relatedTarget.textContent = 'Dropped'
		},
		ondropdeactivate: function(event) {
			// remove active dropzone feedback
			event.target.classList.remove('drop-active')
			event.target.classList.remove('drop-target')
		}
	})

	interact('.block-inner > .block-item:not(.block-btn):not(.burger)').draggable({
		inertia: true,
		modifiers: [
			interact.modifiers.restrictRect({
				restriction: 'parent',
				endOnly: true
			})
		],
		autoScroll: true,
		// dragMoveListener from the dragging demo above
		onmove: dragMoveListener
	})

}


let pageReload = () => {
	let btnVar = document.querySelector('.shayrma a');
	btnVar.addEventListener('click', () => {
		location.reload();
	})
}

//-------- -------- -------- --------
//-------- js custom end
//-------- -------- -------- --------
//-------- -------- -------- --------
//-------- included js libs start
//-------- -------- -------- --------

//= vendors/greensock.js
//= vendors/displace.min.js

//-------- -------- -------- --------
//-------- included js libs end
//-------- -------- -------- --------