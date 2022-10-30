import { useState, useEffect } from 'react'
import bgImage from './images/bg-header-desktop.svg'
import bgMobileImage from './images/bg-header-mobile.svg'

function getWindowWidth() {
  return window.innerWidth;
}

function Header() {

const [windowWidth, setWindowWidth] = useState(getWindowWidth());

  useEffect(() => {
    function handleWindowResize() {
      setWindowWidth(getWindowWidth());
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return (
    <header style={{
      'width': '100vw',
      'height': '156px',
      'backgroundColor': 'hsl(180, 29%, 50%)',
      'marginBottom': '60px',
    }}>

      <img src={windowWidth > 675? bgImage: bgMobileImage} alt='Background design' width='100%' height='156px' />
    </header>
  )
}

export default Header