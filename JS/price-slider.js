const inputLeft = document.getElementById("input-left");
const inputRight = document.getElementById("input-right");


let lowPriceDisplay = document.getElementById('low-price');
let highPriceDisplay = document.getElementById('high-price');
let thumbLeft = document.querySelector(".slider > .thumb.left");
let thumbRight = document.querySelector(".slider > .thumb.right");
let range = document.querySelector(".slider > .range");

function setLeftValue() {
	var _this = inputLeft,
		min = parseInt(_this.min),
		max = parseInt(_this.max);

    // определяем левый или правый селектор имеет меньшее значение.
    _this.value = Math.min(parseInt(_this.value), parseInt(inputRight.value) - 1);
    lowPriceDisplay.innerHTML = _this.value + '$';
    // переводим в проценты что бы потом двигать ползунки в процентах относительно размера блока.
    var percent = ((_this.value - min) / (max - min)) * 100;
    

	thumbLeft.style.left = percent + "%";
	range.style.left = percent + "%";
}
setLeftValue();

function setRightValue() {
	var _this = inputRight,
		min = parseInt(_this.min),
		max = parseInt(_this.max);

	_this.value = Math.max(parseInt(_this.value), parseInt(inputLeft.value) + 1);
    highPriceDisplay.innerHTML = _this.value + '$';
	var percent = ((_this.value - min) / (max - min)) * 100;

	thumbRight.style.right = (100 - percent) + "%";
	range.style.right = (100 - percent) + "%";
}
setRightValue();

inputLeft.addEventListener("input", setLeftValue);
inputRight.addEventListener("input", setRightValue);

