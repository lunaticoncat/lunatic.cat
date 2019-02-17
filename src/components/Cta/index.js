import * as React from 'react';

export default ({ title, subtitle, links }) => {
  return <div className="cta cta--reverse" id="talk-to-us">
  <div className="container">
  <div className="cta__inner">
  <h2 className="cta__title">{title}</h2>
  <p className="cta__sub cta__sub--center">{subtitle}</p>
  { links.map(e => <a href={e.link} key={e.link} className={`button ${e.primary ? 'button__accent' : 'hero__button'}`}>{e.text}</a>) }
  </div>
  </div>
  </div>;
}

