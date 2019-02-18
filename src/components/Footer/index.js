import * as React from 'react';
import Text from './../Text';

export default ({ title, groups }) => {
  return <div className="footer footer--dark">
           <div className="container">
             <div className="footer__inner">
               <a href='#top' className="footer__textLogo cat-font">{title}</a>
               <div className="footer__data">
                  {groups.map((group, i) => {
                    return <div className="footer__data__item" key={i}>
                            {group.map((item, i) => {
                              return <Text className="footer__row" key={i} text={item} />;
                            })}
                          </div>;
                  })}
                </div>
             </div>
           </div>
         </div>;
}

