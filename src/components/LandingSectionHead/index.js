import * as React from 'react';

export default ({ title, subtitle }) => {
  return <>
           <div className="expanded landing__section landing__section__head">
             <div className="container">
               <h2>{title}</h2>
               <p>{subtitle}</p>
             </div>
           </div>
         </>;
}

