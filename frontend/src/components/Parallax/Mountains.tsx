import React from 'react';
interface MountainsProps {
    offsetY: number;
}

const Mountains: React.FC<MountainsProps> = ({ offsetY }) => {
    return (
        <div className="Mountains">
        <svg style={{ position: 'absolute', bottom: '0', width: '100%', height: '50vh', zIndex: 0 }} xmlns="http://www.w3.org/2000/svg">
             <polygon points="0,150 300,50 600,150" fill="#335C6E" style={{ transform: `translateY(${offsetY * 0.3}px)` }} />
            <polygon points="300,150 600,50 900,150" fill="#4AA088" style={{ transform: `translateY(${offsetY * 0.2}px)` }} />
        </svg>
        </div>
    );
};

export default Mountains;
