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
           {sections.map((section, sidx) => {
               switch (section.type) {
               case 'Enumeration':
                 return(<Enumeration {...{...section, key: sidx}} />);
               case 'LandingSection':
                 return(<React.Fragment key={sidx}>
                     <LandingSectionHead {...{...section.head, id: section.id}} />
                        {section.body.map((body, i) => <LandingSection {...{...body, key: i, className: section.id}} />)}
                 </React.Fragment>);
               default: return null;
               }
           })}
           {cta ? <Cta {...cta}/> : null }
           {footer ? <Footer {...footer}/> : null }
         </>;
}
