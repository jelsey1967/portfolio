const slider = {
	data() {
		return {
			counter: 0,
			items: [
				'/img/icon/html.png',
				'/img/icon/css.png',
				'/img/icon/vue.png',
				'/img/icon/scss.png',
				'/img/icon/figma.png',
				'/img/icon/git.png',
				'/img/icon/js.png',
			]
		}
	},
	mounted() {

	}
}

Vue.createApp(slider).mount('#slider')


// v -for= "(item,i) in items"
// : key = "i"
// : src = "item.src"