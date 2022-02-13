const drums = document.querySelectorAll('.drum');

drums.forEach(drum => {
  drum.addEventListener('click', () => {
    makeSound(drum.innerText);
    drumAnimation(drum.innerText);
  })
});


document.addEventListener('keypress', event => {
  makeSound(event.key);
  drumAnimation(event.key);
});

function makeSound(key){
  if(key === 'w') new Audio('../sounds/tom-1.mp3').play();
  if(key === 'a') new Audio('../sounds/tom-2.mp3').play();
  if(key === 's') new Audio('../sounds/tom-3.mp3').play();
  if(key === 'd') new Audio('../sounds/tom-4.mp3').play();
  if(key === 'j') new Audio('../sounds/snare.mp3').play();
  if(key === 'k') new Audio('../sounds/kick-bass.mp3').play();
  if(key === 'l') new Audio('../sounds/crash.mp3').play();
}

function drumAnimation(currentKey){
  const activeButton = document.querySelector('.' + currentKey);
  activeButton.classList.add('pressed');

  setTimeout( () => {
      activeButton.classList.remove('pressed');
    }, 100);
}