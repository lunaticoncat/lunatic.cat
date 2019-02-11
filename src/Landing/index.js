import * as React from 'react';
import './index.scss';

import Nav from './../components/Nav';
import Header from './../components/Header';
import Cta from './../components/Cta';
import Enumeration from './../components/Enumeration';
import LandingSection from './../components/LandingSection';
import Footer from './../components/Footer';

export default ({ nav, header, enumeration, sections, cta, footer }) => {
  return <>
           <Nav {...nav}/>
           <Header {...{...header, catify: true}} />
           <Enumeration {...enumeration} />
           {sections.map((section, i) => <LandingSection {...{...section, key: i}}/>)}
           <Cta {...cta}/>
           <Footer {...footer}/>
         </>;
}
