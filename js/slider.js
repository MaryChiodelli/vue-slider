const slides = [
	'./img/01.jpg',
	'./img/02.jpg',
	'./img/03.jpg',
	'./img/04.jpg',
	'./img/05.jpg'
]

const app = new Vue({
	el: '#app',
	data: {
		slides,
		activeIndex: 0
	},
	methods: {
		goPrevSlide() {
			if (this.activeIndex === 0) {
				this.activeIndex = this.slides.length - 1;
			} else {
				this.activeIndex--;
			}
		},
		goNextSlide() {
			if (this.activeIndex === this.slides.length - 1) {
				this.activeIndex = 0;
			} else {
				this.activeIndex++;
			}
		}
	}
});

console.log(app);