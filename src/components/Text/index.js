import * as React from 'react';
import { Link } from 'react-router-dom';

const Text = ({ text, className }) => {
  console.log('text', text);
  if ((typeof text === 'object') && ('link' in text) && ('text' in text)) {
    if (text.link.match(/^\//)) {
      return <Link className={className} to={text.link}>{text.text}</Link>;
    } else {
      return <a className={className} href={text.link} target="_blank" rel="nofollow noopener noreferrer">{text.text}</a>;
    }
  } else if (Array.isArray(text)) {
    return <>
      {text.map((t, idx) => <Text className={className} key={idx} text={t} />)}
    </>;
  } else {
    return <p className={className}>{text}</p>;
  }
};

export default Text;
