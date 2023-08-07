import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';

const RoundButton = ({ label, url }) => {
  const finalUrl = useBaseUrl(url);

  return (
    <div style={{marginBottom:'20px'}}><a href={finalUrl} target="_blank" rel="noopener noreferrer" style={{
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