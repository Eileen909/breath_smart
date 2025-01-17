import React from 'react';

const WaveBackground = () => {
  return (
    <svg className="wave-background" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 800" preserveAspectRatio="none">
      <path 
        fill="#EAF6FF" 
        fillOpacity="0.5" 
        d="M0,224L80,213.3C160,203,320,181,480,181.3C640,181,800,203,960,229.3C1120,256,1280,288,1360,304L1440,320L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
      />
      <path 
        fill="#EAF6FF" 
        fillOpacity="0.3" 
        d="M0,160L80,181.3C160,203,320,245,480,240C640,235,800,181,960,181.3C1120,181,1280,235,1360,261.3L1440,288L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
      />
    </svg>
  );
};

export default WaveBackground;