import Typewriter from 'typewriter-effect';
import Navbar from './navbar.jsx'

function Header({ className }) {
    return (
        <header className={className}>

            <h1>Mael Albany</h1>

    <Typewriter
        options={{
          strings: [
            'npm run dev',
            'Développeur React / Frontend',
            'Créateur de sites web performants',
            'Disponible pour des missions !'
          ],
          autoStart: true,
          loop: true,
          deleteSpeed: 30,
          delay: 75,
        }}
      />
                  <Navbar />
        
        </header>
    )
}
export default Header