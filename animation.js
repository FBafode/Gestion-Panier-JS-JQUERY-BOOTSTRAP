/*********** HEADER *********** */
var app = document.querySelector('header');
  
var typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

typewriter
  .changeDelay(30)
  .typeString('C\' est <strong> NOEL </strong>, je peux maintenant m\'amuser avec: <strong> HTML </strong>')
  .pauseFor(3000)
  .deleteChars(6)
  .typeString('<strong>CSS</strong> ')
  .pauseFor(3000)
  .deleteChars(4)
  .typeString('<strong>JS</strong> ')
  .pauseFor(3000)
  .deleteChars(4)
  .typeString('<strong>JQUERY</strong> ')
  .pauseFor(3000)
  .deleteChars(7)
  .typeString('<strong>AJAX</strong> ')
  .pauseFor(3000)
  .start();

/*********** FIN ANIMATION HEADER *********** */