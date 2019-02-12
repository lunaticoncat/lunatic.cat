import lorem from 'lorem-ipsum';

const word = (count) => lorem({count, units: 'word'});
const sentence = (count) => lorem({count, units: 'sentences'});

const title = 'c';

const nav = {
  title,
  links: [
    { link: '/', text: 'EN' },
    { link: '/cat', text: 'CAT' },
  ]
};

const enumeration = {
  title: word(1),
  subtitle: sentence(2),
  // should be 3
  items: [
    { img: '#img1', title: word(1), text: sentence(2) },
    { img: '#img2', title: word(1), text: sentence(2) },
    { img: '#img3', title: word(1), text: sentence(2) },
  ]
};

const sections = [
  { img: '#img1', title: word(1), text: sentence(3) },
  { img: '#img2', title: word(1), text: sentence(3) },
  { img: '#img3', title: word(1), text: sentence(3) },
];

const cta = {
  title: word(1),
  subtitle: sentence(2),
  links: [
    { link: '#cta1', text: word(1), primary: true },
  ]
};

const landingHeader = {
  title: 'Lunatic.cat',
  subtitle: 'Trobar les millors solucions tecnològiques pot ajudar el vostre negoci a créixer més ràpidament. Les nostres especialitzacions clau són: torneigs OLAP, sincronització de client-servidor en temps real i DevOps utilitzant Kuburnetes.',
  links: [
    { link: 'mailto:hello@lunatic.cat', text: 'Meow cap a nosaltres', primary: true },
    // { link: '#header2', text: word(1) },
  ]
};

const footer = {
  title: 'c.c',
  // should be 3
  groups: [
    [word(1), word(1)],
    [word(1), word(1)],
    [word(1), word(1),
     word(1), word(1)],
  ]
};

const landing = {
  enumeration,
  sections,
  cta,
};

export default {
  nav,
  landing,
  landingHeader,
  footer,
};
