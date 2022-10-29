import bgImage from '../images/bg-header-desktop.svg'

function Header() {
  return (
    <header style={{
      'width': '100vw',
      'height': '156px',
      'backgroundColor': 'hsl(180, 29%, 50%)'
    }}>
      <img src={bgImage} alt='Background design' />
    </header>
  )
}

export default Header