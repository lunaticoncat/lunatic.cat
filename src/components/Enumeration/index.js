import * as React from 'react';

export default ({ head, body }) => {
  return <div className="steps landing__section">
           <div className="container">
             <h2>{head.title}</h2>
             <p>{head.subtitle}</p>
           </div>
           <div className="container">
             <div className="steps__inner">
               {body.map((item, i) => {
                 return <div className="step" key={i}>
                   <div className="step__media">
                     <img src={item.img} className="step__image" alt="" />
                   </div>
                   <h4>{item.title}</h4>
                   <p className="step__text">{item.text}</p>
                </div>;
               })}
             </div>
           </div>
         </div>;
}
