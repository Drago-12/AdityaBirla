

const burgerImg = document.querySelector('.burger-img');
const burgerCollapse = document.querySelector('.burger-collapase');

burgerImg.addEventListener('click' , () =>{
    burgerCollapse.classList.toggle('burger-collapase-display');

    // burgerCollapse.classList.toggle('burger-collapase-transition');

})

