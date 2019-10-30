var foods = [
  { title: 'Pizza 🍕' },
  { title: 'Apple 🍎' },
  { title: 'Avocado 🥑' }
];

function renderFoods() {
	var foodsList = document.getElementById('foods');
  var foodsListed = '';
  if (foods.length === 0) {
    foodsListed = "<li>There is no food</li>";
  }
	foods.forEach(function(food) {
		foodsListed +=
			'<li>' +
			food.title +
			'<button type="button" onclick="deleteFood(\'' + food.title + '\')">Delete</button>' +
      '<button type="button" onclick="setupEditForm(\'' + food.title + '\')">Edit</button>' +
			'</li>';
	});
	foodsList.innerHTML = foodsListed;
}

function deleteFood(foodTitle) {
	var newFoodsArray = foods.filter(function(food) {
		return food.title !== foodTitle;
	});
	foods = newFoodsArray;
	renderFoods();
}

function addFood(foodTitle) {
  var newFoodTempArray = [{ title: foodTitle }];
  foods = foods.concat(newFoodTempArray);
  renderFoods();
}

function setupEditForm(foodTitle) {
  var editFoodForm = document.getElementById('editFoodForm');
  editFoodForm.classList.remove('hiddenForm');
  editFoodForm.classList.add('shownForm');
  document.getElementById('foodToEditHidden').value = foodTitle;
  document.getElementById('foodToEdit').value = foodTitle;
}

function editFood(oldTitle, newTitle) {
  var newFoodsArray = foods.filter(function(food) {
    return food.title !== oldTitle;
  });
  newFoodsArray.push({ title: newTitle });
  foods = newFoodsArray;
  renderFoods();
}

(function() {
	renderFoods();
  var addFoodForm = document.getElementById('addFoodForm');
	addFoodForm.addEventListener('submit', function(event) {
		event.preventDefault();
		var foodToAddInput = document.getElementById('foodToAdd');
		addFood(foodToAddInput.value);
  });
  var editFoodForm = document.getElementById('editFoodForm');
  editFoodForm.addEventListener('submit', function(event) {
    event.preventDefault();
    var oldEditFoodValue = document.getElementById('foodToEditHidden').value;
    var newEditValue = document.getElementById('foodToEdit').value;
    editFood(oldEditFoodValue, newEditValue);
    var editFoodForm = document.getElementById('editFoodForm');
    editFoodForm.classList.remove('shownForm');
    editFoodForm.classList.add('hiddenForm');
  });
}());
