
const img = document.getElementById('cookie');
const clickCount = document.getElementById('clicker__counter');
let count = 0;

img.onmousedown = function() {
	count += 1;
	clickCount.textContent = count;
	img.width = '250';
}

img.onmouseup = function() {    // По чему не срабатывает событи на отпущеную клавишу мыши?
	img.width = '250';
}

/*
//Повышенный уровень сложности 

const img = document.getElementById('cookie');
const clickCount = document.getElementById('clicker__counter');
const speedClick = document.getElementById('clicker__speed');
let count = 0;
let arrClick =[];

img.onmousedown = function () {
 	arrClick.push(Number(performance.now() / 1000)); // фиксирует время нажатия в сек.
	speedClick.textContent = (1 / (arrClick[arrClick.length - 1] - arrClick[arrClick.length - 2])).toFixed(2); // Из последнего элемента массива вычитатся предпоследний = разница по времени между кликами. 1сек / разницу = среднее кол-во кликов в секунду
	count += 1;
	clickCount.textContent = count;
	img.width = '200';
}

img.onmouseup = function () { // По чему не срабатывает событи на отпущеную клавишу мыши? 
	img.width = '250';
}

*/







