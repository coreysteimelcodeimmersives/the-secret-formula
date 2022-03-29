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
});

let createAccountForm = document.querySelector('#create-account-form');
let username = document.querySelector('#username');
let email = document.querySelector('#email');
let passwordOG = document.querySelector('#passwordOG');
let passwordConfirm = document.querySelector('#passwordConfirm');
let albumImg = document.querySelector('#dr-dog-img');

albumImg.src = 'https://images.squarespace-cdn.com/content/v1/5a5665100abd04ea815ea674/1515651052288-RQUCYHWKBBCNIU7L8N5A/a3044246956_10.jpg?format=500w'

createAccountForm.addEventListener('submit', function(event){
    event.preventDefault();
    alert(`Congratulations, you have created an account with username: ${username.value} and email ${email.value}`);
    username.value = '';
    email.value = '';
    passwordOG = '';
    passwordConfirm = '';
    
});



