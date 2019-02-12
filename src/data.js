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
  subtitle: 'Finding the best tech solutions can help your business grow faster. Our key specializations are: OLAP backends, conflictless realtime client-server CRDT syncronization and DevOps using Kuburnetes.',
  links: [
    { link: 'mailto:hello@lunatic.cat', text: 'Meow to us', primary: true },
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
