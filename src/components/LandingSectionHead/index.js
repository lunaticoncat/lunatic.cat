import * as React from 'react';
import Text from './../Text';
import Image from './../Image';

export default ({ id, title, subtitle, icons = [] }) => {
  return <>
           <div className="expanded landing__section landing__section__head">
             <div className="container">
               <h2>{title}</h2>
              {subtitle ? <Text text={subtitle} /> : null}
               <div className={`icons icons-${id}`}>
                 {icons.map((icon, idx) =>
                   <div className={`icon icon-${id}`} key={idx}>
                     <Image src={icon} />
                   </div>
                  )}
               </div>
             </div>
           </div>
         </>;
}

