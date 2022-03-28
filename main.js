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

let date = document.querySelector('#haircut-date');
let hairstylist = document.querySelector('#hairstylist-text');
let hairlength = document.querySelectorAll('#hair-length input');
let shortLong = '';
let appointment = '';
let haircutForm = document.querySelector('#haircut-form');

haircutForm.addEventListener('submit', function(event){
    event.preventDefault();
    for (let hair of hairlength){
        if (hair.checked){
            shortLong = hair.id;
        }
    }
    appointment = `Your haircut appointment is sceduled for ${date.value} with ${hairstylist.value} for ${shortLong} hair.`
    alert(appointment);
    date.value = '';
    hairstylist.value = '';
    hairlength[0].checked = true;
    shortLong = '';
})



