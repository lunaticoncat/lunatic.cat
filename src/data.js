// import lorem from 'lorem-ipsum';

import reportImg from './images/report.svg';
import syncImg from './images/sync.svg';
import containerImg from './images/container.svg';
import reactImg from './images/react.svg';
import mobileImg from './images/mobile.svg';
import ethereumImg from './images/ethereum.svg';

import veeqoMov from './video/veeqo.x264.mp4';
import veeqoPoster from './video/veeqo.x264.mp4.png';
import bandpMov from './video/bandp.x264.mp4';
import bandpPoster from './video/bandp.x264.mp4.png';
import talkmapMov from './video/talkmap.x264.mp4';
import talkmapPoster from './video/talkmap.x264.mp4.png';
import kanaatPoster from './images/kanaat.jpg';

import razum2umPic from './images/razum2um.jpg?sizes[]=440,sizes[]=220';
import byjikahkazPic from './images/byjikahkaz.jpg?sizes[]=440,sizes[]=220';

import techicons from './techicons';

// const word = (count) => lorem({count, units: 'word'});
// const sentence = (count) => lorem({count, units: 'sentences'});

const title = 'c';
const emailLink = 'mailto:hello@lunatic.cat';
const emailButton = { link: emailLink, text: 'Meow to us', primary: true };

const nav = {
  title,
  links: [
    { link: '/', text: 'EN' },
    { link: '/cat', text: 'CAT' },
  ]
};

const experienceSection = {
  id: 'experience',
  type: 'Enumeration',
  head: {
    title: 'We can help you with',
    subtitle: 'Our expertise ensures that you have the right set of tools for your business which saves you both time and money',
  },
  body: [
    { img: reportImg, title: 'OLAP', text: 'Process hundreds of gigabytes to get new insights into your data.' },
    { img: syncImg, title: 'Realtime Syncronization', text: 'Conflict-free distributed data replication.' },
    { img: reactImg, title: 'Frontend', text: 'Reactive, animated dashboards and visualizations.' },
    { img: mobileImg, title: 'Mobile', text: 'Cross platform development with React Native.' },
    { img: ethereumImg, title: 'Ethereum', text: 'Deploy your own custom networks and server infractructure security audit.' },
    { img: containerImg, title: 'DevOps', text: 'Migrate your system to using of Docker & Kubernetes.' },
  ]
};

// Constrained Baseline Profile Level 3
const x264 = 'video/mp4; codecs=avc1.42C01E';

const workSection = {
  id: 'work',
  type: 'LandingSection',
  head: {
    title: 'Our work',
    subtitle: "Sample use cases we've built using",
    icons: techicons,
  },
  body: [
    {video: {sources: [{src: veeqoMov, type: x264}], poster: veeqoPoster},
     title: "Reports for Veeqo.com", text: ["We processed hundreds of gigabytes of sales records in to give customers of the e-commerce platform quick access to their's aggregated data, follow the trends and plan accordingly.", "All of this was done in a modular way, decoupled from the core functionality and seamlessly integrated right into the existing user interface.", "Technology used: PostgeSQL, Elasticsearch, RabbitMQ.", { link: 'https://www.veeqo.com/features/reporting', text: 'We stand behind this feature ;)'}] },

    {video: {vertical: true,
             poster: bandpPoster,
             sources: [{src: bandpMov, type: x264}]},
     title: 'Brick & Portal iOS app', text: ['Together with digitaldesign.nyc we created a mobile application for a social commerce platform.', 'Features included: contacts, camera access, social networks auth.', 'Technology used: React Native, Redux.', { link: 'https://itunes.apple.com/us/app/brick-portal/id1191500921', text: 'Able to be cross-platform, but now available only in AppStore only'}] },

    {video: {sources: [{src: talkmapMov, type: x264}], poster: talkmapPoster},
     title: 'Frontend for TalkMap.io', text: ['Rich user interface for a service which analyses your social health. Visualisation of the social graph and close relationships.', 'Technology used: clojurescript, re-frame, d3js.', { link: 'https://talkmap.io/', text: 'Take a look here!' }] },
    {img: {src: kanaatPoster, vertical: true},
     title: 'Ethereum mobile client',
     text: ['A full mobile client able to generate crypto private keys and sign Ethereum transactions, used to make voting process transparent',
            'Technology used: React Native, Redux, Ethereum',
           'Not launched yet. Stay tuned!']
    }
  ]
};

const teamSection = {
  id: 'team',
  type: 'LandingSection',
  // type: 'Enumeration',
  head: {
    title: 'Our team',
    subtitle: "We're small now, but this makes communication highly effecient.",
    icons: [
      {...razum2umPic, ratio: true, link: 'https://github.com/razum2um/'},
      {...byjikahkazPic, ratio: true, link: 'https://github.com/ByJIKaHkaz/'}],
  },
  body: [
    // {img: razum2umPic,
    //  title: "Vladimir Bokov", text: [sentence(1), sentence(1)] },

    // {img: byjikahkazPic,
    //  title: 'Vladimir Sidorenko', text: [sentence(1), sentence(1)] },
  ]
};

const cta = {
  title: "Let's talk about your next idea",
  subtitle: '', //sentence(2),
  links: [
    emailButton,
  ]
};

const landingHeader = {
  title: 'Lunatic.cat',
  subtitle: 'We can help your business grow faster. Our key specializations are: OLAP backends, conflictless realtime client-server CRDT syncronization and DevOps using Kuburnetes.',
  links: [
    emailButton,
    // { link: '#header2', text: word(1) },
  ]
};

const footer = {
  title: 'c.c',
  // should be 3
  groups: [
    [], //word(1), word(1)],
    [], //word(1), word(1)],
    [{ link: 'https://github.com/lunatic-cat/', text: 'GitHub' },
     `Lunatic.cat, ${new Date().getFullYear().toString()}`
    ],
  ]
};

const landing = {
  sections: [experienceSection, workSection, teamSection],
  cta,
};

export default {
  nav,
  landing,
  landingHeader,
  footer,
};
