// To connect js scripts used plugin rigger included
// Connection occurs through the design //= folder-name/file-name.js

jQuery(document).ready(function() {
	jsActive("Js active");
});


//-------- -------- -------- --------
//-------- js custom start
//-------- -------- -------- --------

//function jsActive()
function jsActive(arg) {
	console.log(arg);
};

//-------- -------- -------- --------
//-------- js custom end
//-------- -------- -------- --------

//-------- -------- -------- --------
//-------- included js libs start
//-------- -------- -------- --------

// just an example - how to connect library files such as slider, picturefill и other large js files
// It is not necessary to work with js as before just keep in mind there is such an opportunity
// To connect js scripts used plugin rigger included
// Connection occurs through the design //= folder-name/file-name.js

// just an example - how to connect library files such as slider, picturefill and other large js files
// it is not necessary to work with js as before just keep in mind there is such an opportunity
jQuery(document).ready(function() {
	console.log("I'm just an example");
});

//-------- -------- -------- --------
//-------- included js libs end
//-------- -------- -------- --------