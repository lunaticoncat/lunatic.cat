import * as React from 'react';

const responsiveImg = ({ src, className = '', alt = ''}) => {
  if (src.ratio) {
    const images = [...src.images];
    images.sort((a, b) => a.width - b.width);
    const ratioSet = images.map((image, idx) => `${image.path} ${idx + 1}x`);
    return <img src={src.src} srcSet={ratioSet} className={className} alt={alt} />;
  } else {
    return <img src={src.src} srcSet={src.srcSet} className={className} alt={alt} />;
  }
}

export default ({ src, className = '', alt = ''}) => {
  // herrstucki/responsive-loader
  if ((typeof src === 'object') && ('srcSet' in src) && ('src' in src)) {
    if (src.link) {
      return <a className={className} href={src.link} target="_blank" rel="nofollow noopener noreferrer">
        {responsiveImg({ src, className, alt })}
        </a>;
    } else {
      return responsiveImg({ src, className, alt });
    }
  } else {
    return <img src={src} className={className} alt={alt} />;
  }
}
