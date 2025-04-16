import { Link, Outlet } from 'react-router-dom'
import Footer from './components/Footer.tsx'

export default function App() {
  return (
    <main>
      <header>
        <nav className="navbar">
          <div className="nav-container">
            <a href="/" className="nav-logo">
              Lukas Coin
            </a>
            <input type="checkbox" id="menu-toggle" className="menu-toggle" />
            <label htmlFor="menu-toggle" className="menu-icon">
              <span></span>
              <span></span>
              <span></span>
            </label>
            <ul className="nav-links">
              <li>
                <Link to="/">Inicio</Link>
              </li>
              <li>
                <Link to="/about">Sobre el Proyecto</Link>
              </li>
              <li>
                <Link to="/docs">Documentación</Link>
              </li>
              <li>
                <Link to="/roadmap">Roadmap</Link>
              </li>
              <li>
                <Link to="/contact">Contacto</Link>
              </li>
              <li>
                <a href="https://github.com/rgdevment/LukasCoin" target="_blank" rel="noreferrer">
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>

      <Footer />
    </main>
  )
}
