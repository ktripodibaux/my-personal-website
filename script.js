
 const main = document.querySelector('.main')
const lower = document.querySelector('.lower');
const jav = document.querySelector('.jav');
const button = document.querySelector('.button');

 const click = jav.addEventListener('click', function(){
    javer();
 });

const back = button.addEventListener('click', function() {
    javer2();
})

const javer = function() {
    lower.classList.remove('hidden');
    lower.classList.remove('hidden');
    main.classList.add('hidden');
 };
 const javer2 = function() {
    main.classList.remove('hidden');
    lower.classList.add('hidden');
 }