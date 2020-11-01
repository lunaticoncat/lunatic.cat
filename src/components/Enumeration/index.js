import * as React from 'react';
import Image from './../Image';

export default ({ head, body, id }) => {
  return <div className="steps landing__section" id={id}>
           <div className="container">
             <h2>{head.title}</h2>
             <p>{head.subtitle}</p>
           </div>
           <div className="container">
             <div className="steps__inner">
               {body.map((item, i) => {
                 return <div className="step" key={i}>
                   <div className="step__media">
                     <Image src={item.img} className="step__image" lazy={true} />
                   </div>
                   <h3>{item.title}</h3>
                   <p className="step__text">{item.text}</p>
                </div>;
               })}
             </div>
           </div>
         </div>;
}
