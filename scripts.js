"use script"

// everytime you press a key on the key board, it will gather information from what you pressed.

// console logged 'e' to test it if was working in the browsers console.
window.addEventListener('keydown', function(e){
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);

  if(!audio) return; // stops the function from running all together
  audio.currentTime = 0; //rewinds audio to the start

  audio.play();
//  console.log(audio);
});