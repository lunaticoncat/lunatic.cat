import lorem from 'lorem-ipsum';

import reportImg from './images/report.svg';
import syncImg from './images/sync.svg';
import containerImg from './images/container.svg';
import reactImg from './images/react.svg';
import mobileImg from './images/mobile.svg';
import ethereumImg from './images/ethereum.svg';

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
  title: 'We can help you with',
  subtitle: 'Our expertise ensures that you have the right set of tools for your business which saves you both time and money',
  // should be 3
  items: [
    { img: reportImg, title: 'OLAP', text: 'Process hundreds of gygabytes to get new insights into your data.' },
    { img: syncImg, title: 'Realtime Syncronization', text: 'Conflict-free distributed data replication.' },
    { img: reactImg, title: 'Frontend', text: 'Reactive, animated dashboards and visualizations.' },
    { img: mobileImg, title: 'Mobile', text: 'Cross platform development with React Native.' },
    { img: ethereumImg, title: 'Ethereum', text: 'Deploy your own custom networks and server infractructure security audit.' },
    { img: containerImg, title: 'DevOps', text: 'Migrate your system to using of Docker & Kubernetes.' },
  ]
};

const sections = [
  { img: '#img1', title: 'Reports for Veeqo.com', text: sentence(3) },
  { img: '#img2', title: '', text: sentence(3) },
  { img: '#img3', title: '', text: sentence(3) },
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
