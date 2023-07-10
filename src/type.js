'use strict';

new TypeIt('.home__title--strong', {
  loop: true,
  speed: 100,
}) // Dream Coder
  .move(-11)
  .type('Amazing ')
  .pause(1000)
  .move(null, { to: 'END' })
  .delete()
  .type('Front-end Engineer')
  .pause(1000)
  .move(-9)
  .delete(9)
  .type('Back-end')
  .pause(1000)
  .delete(8)
  .type('Full-stack')
  .pause(1000)
  .move(9)
  .delete()
  .go();
// .move(-5)
// .type('어메이징 ')
// .pause(1000)
// .move(null, { to: 'END' })
// .delete()
// .type('프론트엔드 엔지니어')
// .pause(1000)
// .move(-5)
// .delete(5)
// .type('백엔드')
// .pause(1000)
// .delete(3)
// .type('풀스택')
// .pause(1000)
// .move(5)
// .delete()
// .go();
