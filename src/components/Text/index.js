import * as React from 'react';

export default ({ text, className }) => {
  if (Array.isArray(text)) {
    return <>
      {text.map((t, idx) => <p className={className} key={idx}>{t}</p>)}
    </>;
  } else {
    return <p className={className}>{text}</p>;
  }
};
