import * as React from 'react';
import './index.scss';

import Nav from './../components/Nav';
import Header from './../components/Header';
import Cta from './../components/Cta';
import Enumeration from './../components/Enumeration';
import LandingSection from './../components/LandingSection';
import LandingSectionHead from './../components/LandingSectionHead';
import Footer from './../components/Footer';

export default ({ nav, header, enumeration, sections, sectionHead, cta, footer }) => {
  return <>
           <Nav {...nav}/>
           <Header {...{...header, catify: true}} />
           {enumeration ? <Enumeration {...enumeration} /> : null}
           {sections.map((section, i) =>
             <div key={i}>
               <LandingSectionHead {...{...section.head, key: i+1000}} />
               {section.body.map((body, i) =>
                 <LandingSection {...{...body, key: i}} />
                )}
             </div>)}
           {cta ? <Cta {...cta}/> : null }
           {footer ? <Footer {...footer}/> : null }
         </>;
}
