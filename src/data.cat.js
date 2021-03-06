/*eslint no-unused-vars: "off"*/
import { LoremIpsum } from "lorem-ipsum";

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4
  },
  wordsPerSentence: {
    max: 16,
    min: 4
  }
});

const word = (count) => lorem.generateWords(count);
const sentence = (count) => lorem.generateSentences(count);

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

const sections = [{
  head: { title: word(1), subtitle: sentence(2) },
  body: [
    { img: '#img1', title: word(1), text: sentence(3) },
    { img: '#img2', title: word(1), text: sentence(3) },
    { img: '#img3', title: word(1), text: sentence(3) },
  ]
}];

const cta = {
  title: word(1),
  subtitle: sentence(2),
  links: [
    { link: '#cta1', text: word(1), primary: true },
  ]
};

const landingHeader = {
  fullscreen: true,
  title: 'Lunatic.cat',
  subtitle: 'Les nostres especialitzacions clau són: torneigs OLAP, CRDT sincronització de client-servidor en temps real i DevOps utilitzant Kubernetes.',
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
  // enumeration,
  // sections,
  sections: [],
  // cta,
};

export default {
  nav,
  landing,
  landingHeader,
  // footer,
};
