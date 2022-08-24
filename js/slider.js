const slides = [
	{
		imgSrc: './img/01.jpg',
		isActive: false
	},
	{
		imgSrc: './img/02.jpg',
		isActive: false
	},
	{
		imgSrc: './img/03.jpg',
		isActive: true
	},
	{
		imgSrc: './img/04.jpg',
		isActive: false
	},
	{
		imgSrc: './img/05.jpg',
		isActive: false
	}
]

const app = new Vue({
	el: '#app',
	data: {
		slides: slides
	}
});

console.log(app.slides);