import * as React from 'react';
import Text from './../Text';
import Image from './../Image';

export default ({ id, title, subtitle, devicons = [] }) => {
  return <>
           <div className="expanded landing__section landing__section__head">
             <div className="container">
               <h2>{title}</h2>
               <Text text={subtitle} />
               <div className='devicons'>
                 {devicons.map((icon, idx) =>
                   <div className={`devicon devicon-${id}`} key={idx}>
                     <Image src={icon} />
                   </div>
                  )}
               </div>
             </div>
           </div>
         </>;
}

