import * as React from 'react';
import { Link } from 'react-router-dom';

export default ({ text, className }) => {
  if ((typeof text === 'object') && ('link' in text) && ('text' in text)) {
    if (text.link.match(/^\//)) {
      return <Link className={className} to={text.link}>{text.text}</Link>;
    } else {
      return <a className={className} href={text.link} target="_blank" rel="nofollow noopener noreferrer">{text.text}</a>;
    }
  } else if (Array.isArray(text)) {
    return <>
      {text.map((t, idx) => <p className={className} key={idx}>{t}</p>)}
    </>;
  } else {
    return <p className={className}>{text}</p>;
  }
};
