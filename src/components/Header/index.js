import * as React from 'react';

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
             {/* <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" className='hero__sub__down' fill="currentColor" width="512px" height="512px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"><path d="M256,298.3L256,298.3L256,298.3l174.2-167.2c4.3-4.2,11.4-4.1,15.8,0.2l30.6,29.9c4.4,4.3,4.5,11.3,0.2,15.5L264.1,380.9c-2.2,2.2-5.2,3.2-8.1,3c-3,0.1-5.9-0.9-8.1-3L35.2,176.7c-4.3-4.2-4.2-11.2,0.2-15.5L66,131.3c4.4-4.3,11.5-4.4,15.8-0.2L256,298.3z"/></svg> */}
           </span>
         </div>
       </>;
}
