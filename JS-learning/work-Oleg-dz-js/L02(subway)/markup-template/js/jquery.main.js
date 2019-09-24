document.addEventListener('DOMContentLoaded', function() {
clickForStaf(staffClassList);
pageReload();
}, false);
//-------- -------- -------- --------
//-------- js custom start
//-------- -------- -------- --------

// tutorial https://abraxabra.ru/blog/prochee/greensock-for-beginners-a-tutorial-on-web-animation-part-1/
var staffClassList = [".salat", ".onion", ".chicken", ".tomato", ".cucumber", ".cheese", ".chips", ".bob", ".becon"]

function clickForStaf(arr) {
	let classList = arr;
	let classListLength = classList.length;
	let fergit = $(".fergit");
	let shayrma = $(".shayrma");
	let burger = $(".burger");
	var i2 = 0;
	for (let i = 0; i < classListLength; i++) {
		let $class = $(`.block-item${classList[i]}`);
		function clickFun() {
		$class.on('click', function() {
			let tl = new TimelineMax();
			let classImg = $(this).find("img");
			let classImgPos = classImg.position();
			let $classStaff = $(`.block-staffing ${classList[i]}`);
			i2++;
			tl.set(classImg, { position: "absolute", top: classImgPos.top, left: classImgPos.left}).to(classImg, 1.2, { left: "50%", top: "50%", opacity: 0.4, x:"-50%", y:"-50%"}).to(classImg, 0.3, {opacity: 0}).to($classStaff, 0.5, { scale: 1 ,opacity: 1});
			if(i2 == classListLength) {
				let tl2 = new TimelineMax();
				tl2.to(fergit, 1.2, {scale: 1,opacity: 1, x:"-50%"}, 2).add('newPoint').to(fergit, 1, {scale: 0,opacity: 0}, 'newPoint+=6').to(burger, 1, {scale: 0,opacity: 0}, 'newPoint+=6').to(shayrma, 1, {scale: 1,opacity: 1, x:"-50%"})
			}
		});
	}
	clickFun();
	}
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

//-------- -------- -------- --------
//-------- included js libs end
//-------- -------- -------- --------