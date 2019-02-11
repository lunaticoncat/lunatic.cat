import * as React from 'react';

export default ({ img, title, text }) => {
  return <>
           <div className="expanded landing__section">
             <div className="container">
               <div className="expanded__inner">
                 <div className="expanded__media">
                   <img src="{ img }" className="expanded__image" />
                 </div>
                 <div className="expanded__content">
                    <h2 className="expanded__title">{title}</h2>
                    <p className="expanded__text">{text}</p>
                 </div>
               </div>
             </div>
           </div>
         </>
}

