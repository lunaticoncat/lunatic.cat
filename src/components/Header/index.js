import * as React from 'react';
import scroll from './scroll.svg';
import useScrollPosition from './../../hooks/useScrollPosition';

export default ({ title, subtitle, links, catify, fullscreen }) => {
  const scrollPosition = useScrollPosition();
  const hideScrollDown = scrollPosition > 20;

  return <>
         <div className="hero" id="top">
           <div className="hero__overlay hero__overlay--gradient"></div>
           <div className="hero__mask"></div>
           <div className="hero__inner">
             <div className="container">
               <div className={`hero__content ${fullscreen ? 'hero__content__fullscreen' : ''}`}>
                 <div className="hero__content__inner" id='navConverter'>
                   <h1 className={`hero__title ${catify ? 'cat-font': ''}`}>{title}</h1>
                   <p className="hero__text">{subtitle}</p>
                   { links.map(e => <a href={e.link} key={e.link} className={`button ${e.primary ? 'button__accent' : 'hero__button'}`}>{e.text}</a>) }
                 </div>
               </div>
             </div>
           </div>
        </div>
       {fullscreen ? null :
        (<div className="hero__sub">
           <span id="scrollToNext" className={`scroll ${hideScrollDown ? 'invisible' : ''}`}>
             <img src={scroll} className="hero__sub__down" alt="scroll down" />
           </span>
         </div>)}
       </>;
}
