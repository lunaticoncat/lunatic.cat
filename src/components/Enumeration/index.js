import * as React from 'react';

export default ({ title, subtitle, items }) => {
  return <div className="steps landing__section">
           <div className="container">
             <h2>{title}</h2>
             <p>{subtitle}</p>
           </div>
           <div className="container">
             <div className="steps__inner">
               {items.map((item, i) => {
                 return <div className="step" key={i}>
                   <div className="step__media">
                     <img src="{item.img}" className="step__image" />
                   </div>
                   <h4>{item.title}</h4>
                   <p className="step__text">{item.text}</p>
                 </div>
               })}
             </div>
           </div>
         </div>;
}
