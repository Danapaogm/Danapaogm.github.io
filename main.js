let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
 cursor: "<span style='color: #960f02;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color:#820d02;">Me apasiona la programación y estoy comprometida a aprender y crecer en este fascinante mundo tecnológico.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
