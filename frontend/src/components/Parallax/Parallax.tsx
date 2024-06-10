import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import sun from '../../assets/sun.png';

const ParallaxContainer = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    overflow: hidden;
    top: 0;
    left: 0;
    z-index: -1;
`;

const Layer = styled.div<{ speed: number }>`
    position: absolute;
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    transform: translateZ(${props => props.speed}px) scale(${props => 1 - props.speed});
`;

const Sun = styled.img<{ offsetY: number }>`
    position: absolute;
    width: 100px;
    height: 100px;
    top: ${props => 10 - props.offsetY / 10}%;
    left: 50%;
    transform: translateX(-50%);
`;

const Sky = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #CFFAFA;
`;

const Mountain = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-position: center bottom;
    background-size: cover;
`;

const Mountain1 = styled(Mountain)`
    background-image: linear-gradient(to top, #5ACCCC, transparent 50%);
    bottom: 0;
    height: 20vh;
`;

const Mountain2 = styled(Mountain)`
    background-image: linear-gradient(to top, #53C2C2, transparent 50%);
    bottom: 0;
    height: 25vh;
`;

const Mountain3 = styled(Mountain)`
    background-image: linear-gradient(to top, #28B8B8, transparent 50%);
    bottom: 0;
    height: 30vh;
`;

const Mountain4 = styled(Mountain)`
    background-image: linear-gradient(to top, #4AA088, transparent 50%);
    bottom: 0;
    height: 35vh;
`;

const Mountain5 = styled(Mountain)`
    background-image: linear-gradient(to top, #335C6E, transparent 50%);
    bottom: 0;
    height: 40vh;
`;

const Parallax: React.FC = () => {
    const [offsetY, setOffsetY] = useState(0);

    const handleScroll = () => {
        setOffsetY(window.pageYOffset);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <ParallaxContainer>
            <Sky />
            <Sun src={sun} offsetY={offsetY} />
            <Mountain5 style={{ transform: `translateY(${offsetY * 0.5}px)` }} />
            <Mountain4 style={{ transform: `translateY(${offsetY * 0.4}px)` }} />
            <Mountain3 style={{ transform: `translateY(${offsetY * 0.3}px)` }} />
            <Mountain2 style={{ transform: `translateY(${offsetY * 0.2}px)` }} />
            <Mountain1 style={{ transform: `translateY(${offsetY * 0.1}px)` }} />
        </ParallaxContainer>
    );
};

export default Parallax;
