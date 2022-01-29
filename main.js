// Кнопка запуска
const randBtn = $('.rand-btn');

const getHex = size => {
	// Массив из которого берётся значение
	let hexRef = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
	// Hex код
	hex = [];

	// Генерация чисел и букв
	for (let n = 0; n < size; n++) {
	  hex.push(hexRef[Math.floor(Math.random() * 16)]);
	};
	// Соединение букв в строку и добавление "#" для hex кода
	hex = "#" + hex.join('');

	$('.color').css({
		'background': hex
	});
};

randBtn.click(() => {
	getHex(6);
});

$(".copy").click(() => {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val(hex).select();
    document.execCommand("copy");
    $temp.remove();
});

