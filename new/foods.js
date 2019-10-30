new Vue({
	el: '#app',
	data: function() {
		return {
			foodToAdd: '',
			foods: [{ title: 'Pizza 🍕' }, { title: 'Apple 🍎' }, { title: 'Avocado 🥑' }],
		};
	},
	methods: {
		addFood: function() {
			this.foods.push({ title: this.foodToAdd });
			this.foodToAdd = '';
		},
		deleteFood: function(food) {
			this.foods.splice(this.foods.indexOf(food), 1);
		},
	},
});
