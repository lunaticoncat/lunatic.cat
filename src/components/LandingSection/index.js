import * as React from 'react';
import Text from './../Text';
import Image from './../Image';

export default ({ img, video, title, text }) => {
  return <>
           <div className="expanded landing__section">
             <div className="container">
               <div className="expanded__inner">
                 <div className="expanded__media">
                   {(typeof img === 'object') ? <Image src={img.src} className={`expanded__image ${img.vertical ? 'expanded__image--vertical' : '' }`} /> : null }
                   {(typeof img === 'string') ? <Image src={img.src} className={`expanded__image ${img.vertical ? 'expanded__image--vertical' : '' }`} /> : null }
                   {video ? (<video autoPlay loop defaultmuted="true" muted="muted" playsInline onContextMenu={() => {}} preload="auto" className={`expanded__video ${video.vertical ? 'expanded__video--vertical' : ''}`} poster={video.poster}>
                     {video.sources.map((source, idx) => <source src={source.src} type={source.type} key={idx} />)}
                   </video>): null }
                 </div>
                 <div className="expanded__content">
                    <h2 className="expanded__title">{title}</h2>
                    <Text className="expanded__text" text={text} />
                 </div>
               </div>
             </div>
           </div>
         </>
}

