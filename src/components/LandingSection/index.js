import * as React from 'react';

export default ({ img, video, title, text }) => {
  return <>
           <div className="expanded landing__section">
             <div className="container">
               <div className="expanded__inner">
                 <div className="expanded__media">
                   {img ? <img src={img} className="expanded__image" alt="" /> : null }
                   {video ? (<video autoPlay={true} loop={true} className="expanded__video">
                               {video.map((source, idx) => <source src={source.src} type={source.type} key={idx} />)}
                             </video>): null }
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

