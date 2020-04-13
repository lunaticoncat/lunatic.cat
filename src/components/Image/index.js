import * as React from 'react';

import Undraw from 'react-undraw';

const responsiveImg = ({ src, className = '', alt = '', lazy = false}) => {
  if (src.ratio) {
    const images = [...src.images];
    images.sort((a, b) => a.width - b.width);
    const ratioSet = images.map((image, idx) => `${image.path} ${idx + 1}x`);
    return <img src={src.src} srcSet={ratioSet} className={className} alt={alt} loading={`${lazy ? 'lazy' : ''}`} />;
  } else {
    return <img src={src.src} srcSet={src.srcSet} className={className} alt={alt} loading={`${lazy ? 'lazy' : ''}`} />;
  }
}

const imageType = ({imageType, ...props}) => {
  switch (imageType) {
    case 'react-undraw':
      return <Undraw {...props}/>;
    default:
      return null
  }
}

export default ({ src, className = '', alt = '', lazy = false}) => {
  // herrstucki/responsive-loader
  if ((typeof src === 'object') && ('src' in src) && (('srcSet' in src) || (src.src.match(/^data:/)))) {
    if (src.link) {
      return <a className={className} href={src.link} target="_blank" rel="nofollow noopener noreferrer">
        {responsiveImg({ src, className, alt, lazy })}
        </a>;
    } else {
      return responsiveImg({ src, className, alt, lazy });
    }
  } else if ((typeof src === 'object') && ('imageType' in src)) {
    return imageType(src);
  } else {
    return <img src={src} className={className} alt={alt} loading={`${lazy ? 'lazy' : ''}`} />;
  }
}
