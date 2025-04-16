import { Outlet } from 'react-router-dom'
import Footer from './components/Footer.tsx'

export default function App() {
  return (
    <main>
      <header>
        <nav className="navbar">
          <div className="nav-container">
            <a href="/public" className="nav-logo">
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
                <a href="/">Inicio</a>
              </li>
              <li>
                <a href="/about">Sobre el Proyecto</a>
              </li>
              <li>
                <a href="/docs">Documentación</a>
              </li>
              <li>
                <a href="/roadmap">Roadmap</a>
              </li>
              <li>
                <a href="/contact">Contacto</a>
              </li>
              <li>
                <a href="https://github.com/rgdevment/LukasCoin" target="_blank">
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
