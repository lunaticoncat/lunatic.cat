import * as React from 'react';
import useScrollPosition from './../../hooks/useScrollPosition';

export default ({ title, links }) => {
  const scrollPosition = useScrollPosition();
  const visibleNavbar = scrollPosition > 400;

  return <div className={`navbar ${visibleNavbar ? '' : 'navbar--extended'}`}>
           <nav className="nav__mobile"></nav>
           <div className="container">
             <div className="navbar__inner">
               <a href='/' className="navbar__logo cat-font">{title}</a>
               <nav className="navbar__menu">
                 <ul>
                   { links.map(e => <li key={e.link}><a href={e.link}>{e.text}</a></li>) }
                 </ul>
               </nav>
               <div className="navbar__menu-mob"><a href='#nav' id='toggle'><svg role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z" className=""></path></svg></a></div>
             </div>
           </div>
         </div>;
}
