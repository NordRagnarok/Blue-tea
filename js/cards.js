// import { addClasses, removeClasses } from './theme.mjs';

let chbMedia = document.getElementById('switch_media');
let mediaCard = document.querySelector('.media-card');

$('input[type="radio"]').bind('click', function(){
    // Processing only those that match the name attribute of the currently clicked button...
    $('input[name="' + $(this).attr('name') + '"]').not($(this)).trigger('deselect'); // Every member of the current radio group except the clicked one...
});
// $('input[type="radio"]').bind('deselect', function(){
//     console.log($(this));
// })
// let weatherCardColor = 'weather-card-color';
// let todoCard = document.querySelector('.todo-card');
// let todoCardColor = 'todo-card-color';
console.log({mediaCard})
chbMedia.onclick = () => {
	if (chbMedia.checked) {
		localStorage.setItem('mediaCard', 'shown');
		// chbTodo.checked = false;
		// localStorage.setItem('todoCard', 'hidden');
		// removeClasses(todoCard, todoCardColor);
		addClasses(mediaCard, weatherCardColor);
	}
}
$(chbMedia).on("deselect", function() {
    localStorage.setItem('mediaCard', 'hidden');
    removeClasses(mediaCard, weatherCardColor);
});


// Categories
let chbTasmota = document.getElementById('switch_tasmota');
let tasmotaCard = document.querySelector('.tasmota-card');
console.log({chbTasmota})
chbTasmota.onclick = () => {
	if (chbTasmota.checked) {
		localStorage.setItem('tasmotaCard', 'shown');
		// chbTodo.checked = false;
		// localStorage.setItem('todoCard', 'hidden');
		// removeClasses(todoCard, todoCardColor);
		addClasses(tasmotaCard, weatherCardColor);
	}
}

$(chbTasmota).on("deselect", function() {
    localStorage.setItem('tasmotaCard', 'hidden');
    removeClasses(tasmotaCard, weatherCardColor);
});