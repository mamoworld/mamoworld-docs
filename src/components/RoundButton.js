import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';

const RoundButton = ({ label, url, blank = false }) => {
  const finalUrl = useBaseUrl(url);

  return (
    <div style={{marginBottom:'20px'}}><a href={finalUrl} 
                        target={blank ? '_blank' : '_self'} 
                        rel={blank ? 'noopener noreferrer' : undefined} // Add noopener noreferrer only if blank is true
                        style={{
                        backgroundColor: '#f3971b',
                        borderRadius: '20px',
                        color: '#fff',
                        padding: '10px 17px 10px 17px',
                        cursor: 'pointer',
                    }}
        className="round-button">
      {label}
    </a>
    </div>
  );
};

export default RoundButton;