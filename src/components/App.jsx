import { useRef } from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import '../styles/global.css';
import moon from '../assets/moon.png';
import land from '../assets/land.png';
import cat from '../assets/cat.gif';
const base = import.meta.env.BASE_URL;

export default function ParallaxComponent() {
  const ref = useRef();

  return (
    <div>
      <Parallax pages={4} ref={ref}>
        <ParallaxLayer
          offset={0}
          speed={1}
          factor={2}
          style={{
            width: '100%',
            backgroundImage: `url(${moon.src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />

        <ParallaxLayer
          offset={2}
          speed={1}
          factor={4}
          style={{
            backgroundImage: `url(${land.src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: '100%',
          }}
        />

        <ParallaxLayer
          sticky={{ start: 0.9, end: 2.5 }}
          style={{ textAlign: 'center' }}
        >
          <img src={cat.src} alt="cat" />
        </ParallaxLayer>

        <ParallaxLayer
          offset={0.2}
          speed={0.05}
          onClick={() => ref.current.scrollTo(3)}
        >
          <h2>Help me! ↓↓↓</h2>
        </ParallaxLayer>

        <ParallaxLayer
          offset={3}
          speed={2}
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <h2>Thank you for saving me Liu♥</h2>

          <a href={`${base}video`} style={{
            marginTop: '20px',
            padding: '10px 60px',
            backgroundColor: 'rgba(19, 19, 19, 0.46)',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '100px',
            fontWeight: 'bold',
            fontSize: '30px',
          }}>
            Press me!!!
          </a>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}
