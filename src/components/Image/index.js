import * as React from 'react';

export default ({ src, className = '', alt = ''}) => {
  // herrstucki/responsive-loader
  if ((typeof src === 'object') && ('srcSet' in src) && ('src' in src)) {
    return <img src={src.src} srcSet={src.srcSet} className={className} alt={alt} />;
  } else {
    return <img src={src} className={className} alt={alt} />;
  }
}
