const slides = [
	{
		imgSrc: './img/01.jpg',
		isActive: true
	},
	{
		imgSrc: './img/02.jpg',
		isActive: false
	},
	{
		imgSrc: './img/03.jpg',
		isActive: false
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
		slides: slides,
		index: 0
	},
	methods: {
		goPrevSlide() {
			const slideActive = slides[this.index];
			slideActive.isActive = false;
			const nextSlide = slides[this.index - 1];
			nextSlide.isActive = true;
			this.index = this.index - 1;
			console.log(this.index);
		},
		goNextSlide() {
			const slideActive = slides[this.index];
			slideActive.isActive = false;
			const nextSlide = slides[this.index + 1];
			nextSlide.isActive = true;
			this.index = this.index + 1;
			console.log(this.index);
		}
	}
});

console.log(app.slides);