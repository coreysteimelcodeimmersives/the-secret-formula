let inputText = document.querySelector('#input-text');
let simpleForm = document.querySelector('#simple-form');

simpleForm.addEventListener('submit', function(event){
    event.preventDefault();
    alert(inputText.value);
    inputText.value = ''
});

let sandwichForm = document.querySelector('#sandwich-builder');
let ingredients = document.querySelectorAll('#sandwich-builder input')
let sandwich = 'Your wheat bread sandwich contains: '
let ingredientList = [];


sandwichForm.addEventListener('submit', function(event){
    event.preventDefault();
    for (let ingredient of ingredients){
        if (ingredient.checked){
            ingredientList.push(ingredient.id);
        }
    }
    alert(sandwich + ingredientList.join(", "));
    for (let ingredient of ingredients){
        if (ingredient.checked){
            ingredient.checked = false;
        }
    }
    sandwich = 'Your wheat bread sandwich contains: ';
});


