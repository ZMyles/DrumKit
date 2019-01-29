"use script"

// everytime you press a key on the key board, it will gather information from what you pressed.

// console logged 'e' to test it if was working in the browsers console.
// window.addEventListener('keydown');




function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return; // stops the function from running all together

    key.classList.add('playing');
    audio.currentTime = 0; //rewinds audio to the start
    audio.play();
    
}

function removeTransition(e) {
  if(e.propertyName !== 'transform') return;
    this.classList.remove('playing');
}


const keys = Array.from(document.querySelectorAll('.key'));
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));


window.addEventListener('keydown', playSound);
