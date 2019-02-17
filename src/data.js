import lorem from 'lorem-ipsum';

import reportImg from './images/report.svg';
import syncImg from './images/sync.svg';
import containerImg from './images/container.svg';
import reactImg from './images/react.svg';
import mobileImg from './images/mobile.svg';
import ethereumImg from './images/ethereum.svg';

import veeqoMov from './video/veeqo.x264.mp4';
import bandpMov from './video/bandp.x264.mp4';
import talkmapMov from './video/talkmap.x264.mp4';

import techicons from './techicons';

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
    { img: reportImg, title: 'OLAP', text: 'Process hundreds of gigabytes to get new insights into your data.' },
    { img: syncImg, title: 'Realtime Syncronization', text: 'Conflict-free distributed data replication.' },
    { img: reactImg, title: 'Frontend', text: 'Reactive, animated dashboards and visualizations.' },
    { img: mobileImg, title: 'Mobile', text: 'Cross platform development with React Native.' },
    { img: ethereumImg, title: 'Ethereum', text: 'Deploy your own custom networks and server infractructure security audit.' },
    { img: containerImg, title: 'DevOps', text: 'Migrate your system to using of Docker & Kubernetes.' },
  ]
};

const x264 = 'video/mp4; codecs=avc1.4D401E';

const sections = [{
  head: {
    title: 'Our work',
    subtitle: "Sample use cases we've built using",
    devicons: techicons,
  },
  body: [
    {video: {sources: [{src: veeqoMov, type: x264}]},
     title: "Reports for Veeqo.com", text: ["We processed hundreds of gigabytes of sales records in to give customers of the e-commerce platform quick access to their's aggregated data, follow the trends and plan accordingly.", "All of this was done in a modular way, decoupled from the core functionality and seamlessly integrated right into the existing user interface."] },

    {video: {vertical: true,
             sources: [{src: bandpMov, type: x264}]},
     title: 'Brick & Portal iOS app', text: 'Together with digitaldesign.nyc we created a mobile application for a social commerce platform' },

    {video: {sources: [{src: talkmapMov, type: x264}]},
     title: 'Frontend for TalkMap.io', text: '' },
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
