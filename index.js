const rating = document.querySelector('.rating'); //rating container
const thankyou = document.querySelector('.thankyou'); //thankyou container
const buttonSubmit = document.querySelector('.btn-submit'); //submit button
const ratings = document.getElementById('ratings'); 
const ratingButton = document.querySelectorAll('.button-rating')

// add click event to submit button
buttonSubmit.addEventListener('click', () => {
    thankyou.classList.remove('hidden')
    rating.style.display = 'none'
});

ratingButton.forEach((rate) => {
    rate.addEventListener('click', () => {
        ratings.innerHTML =  rate.innerHTML
    })
});

