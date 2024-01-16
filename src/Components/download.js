import React, { useRef } from 'react';

const Download = ({ url }) => {
  const downloadRef = useRef(null);

  const handleDownload = () => {
    downloadRef.current.click();
  };

  return React.createElement(
    React.Fragment,
    null,
    React.createElement(
      'button',
      { onClick: handleDownload },
      'Download'
    ),
    React.createElement('a', { href: url, download: true, ref: downloadRef })
  );
};

export default Download;
