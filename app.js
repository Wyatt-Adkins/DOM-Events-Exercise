// dom events exercise

// 1a
const button1 = document.getElementById('one');

// 1b
button1.onclick = function(){
    alert('you clicked the first button! Congrats Dude!');
}

// 2a
const h3 = document.querySelector('h3');

// 2b
h3.addEventListener('mouseover' , () =>{
    alert('you hovered over the h3 element, im not sure how you did that honestly so nice work!!!')
});

// 3a

const form = document.querySelector('form');

// 3b

form.addEventListener(`submit`, () =>{
    alert(`$(form.entry.value)`);
});

// bonus time!
// 4a
const darkMode = document.getElementById('dm');

// 4b
const star = document.querySelector(`*`);
darkMode.addEventListener(`click`, () => {
    star.classList.toggle(`dark-mode`);
})

// 5a
const times = document.querySelector(`#times`);

// 5b
let num = 3;
times.addEventListener(`click`,() => {
    num--
if (num > 0) {
alert ("You clicked the last button! Congrats!");
} else if (num <= 0) {
alert ("OH NO! This button is NOT going to work anymore");
times.disabled = true;
}})