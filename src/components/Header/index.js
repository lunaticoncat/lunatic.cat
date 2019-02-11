import * as React from 'react';
import scroll from './scroll.svg';

export default ({ title, subtitle, links }) => {
  return <>
         <div className="hero">
           <div className="hero__overlay hero__overlay--gradient"></div>
           <div className="hero__mask"></div>
           <div className="hero__inner">
             <div className="container">
               <div className="hero__content">
                 <div className="hero__content__inner" id='navConverter'>
                   <h1 className="hero__title">{title}</h1>
                   <p className="hero__text">{subtitle}</p>
  { links.map(e => <a href="{e.link}" key={e.link} className={`button ${e.primary ? 'button__accent' : 'hero__button'}`}>{e.text}</a>) }
                 </div>
               </div>
             </div>
           </div>
         </div>
         <div className="hero__sub">
           <span id="scrollToNext" className="scroll">
              <img src={scroll} className="hero__sub__down" alt="scroll down" />
           </span>
         </div>
       </>;
}
