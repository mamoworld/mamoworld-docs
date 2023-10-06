import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';

const RoundButton = ({ label, url, blank = false }) => {
  const finalUrl = useBaseUrl(url);

  // Check if the url prop is provided
  const isDisabled = !url;
  return (
    <div style={{marginBottom:'20px'}}><a
        href={isDisabled ? undefined : finalUrl}
        target={blank && !isDisabled ? '_blank' : '_self'}
        rel={blank && !isDisabled ? 'noopener noreferrer' : undefined}
        style={{
          backgroundColor: isDisabled ? '#ccc' : '#f3971b',
          borderRadius: '20px',
          color: '#fff',
          padding: '10px 17px 10px 17px',
          cursor: isDisabled ? 'not-allowed' : 'pointer',
        }}
        className="round-button"
        // Disable the button when there is no URL
        disabled={isDisabled}
      >
        {label}
      </a>
    </div>
  );
};

export default RoundButton;