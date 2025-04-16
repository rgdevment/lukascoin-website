import { Outlet } from 'react-router-dom'
import AddToMetaMaskButton from './components/AddToMetaMaskButton.tsx'

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
                <a href="/public">Inicio</a>
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

      <footer>
        <AddToMetaMaskButton />

        <p>&copy; 2025 Lukas Coin. Todos los derechos reservados.</p>
        <p>
          <a href="https://github.com/rgdevment/LukasCoin" target="_blank">
            GitHub
          </a>{' '}
          |{' '}
          <a
            href="https://polygonscan.com/token/0x31EF5a8a8Fa124D7270543c1095A45381740c490"
            target="_blank"
          >
            Polygonscan
          </a>
        </p>
      </footer>
    </main>
  )
}
