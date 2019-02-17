import * as React from 'react';

export default ({ src, className = '', alt = ''}) => {
  // herrstucki/responsive-loader
  if ((typeof src === 'object') && ('srcSet' in src) && ('src' in src)) {
    if (src.ratio) {
      const images = [...src.images];
      images.sort((a, b) => a.width - b.width);
      const ratioSet = images.map((image, idx) => `${image.path} ${idx + 1}x`);
      return <img src={src.src} srcSet={ratioSet} className={className} alt={alt} />;
    } else {
      return <img src={src.src} srcSet={src.srcSet} className={className} alt={alt} />;
    }
  } else {
    return <img src={src} className={className} alt={alt} />;
  }
}
