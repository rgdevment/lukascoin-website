import { Link } from 'react-router-dom'
import logo from '../assets/lukas_coin_logo_256.svg'

export default function Home() {
  return (
    <main>
      <section className="hero">
        <img
          src={logo}
          alt="Logo grande de Lukas Coin"
          style={{ width: '160px', maxWidth: '90%', marginBottom: '1rem' }}
        />
        <div className="hero-content">
          <h1>Lukas Coin (LKS)</h1>
          <p>
            Una criptomoneda solidaria desde Chile, creada para conectar, inspirar y transformar la
            vida de niños y familias con autismo.
          </p>
          <Link to="/about" className="btn">
            Conoce nuestra historia
          </Link>
        </div>
      </section>

      <section className="info">
        <h2>¿Qué es Lukas Coin?</h2>
        <p>
          Lukas Coin (LKS) es una criptomoneda solidaria sin fines de lucro. Su objetivo es mejorar
          la calidad de vida de niños y familias afectadas por el autismo mediante tecnología Web3,
          comunicación aumentativa e inclusión digital.
        </p>
        <p>
          Inspirado en Lukas, un niño chileno con autismo, este proyecto busca romper barreras,
          empoderar comunidades y conectar personas a través de herramientas accesibles, abiertas y
          transparentes.
        </p>
      </section>

      <section className="info">
        <h2>Nuestra Misión</h2>
        <p>
          Usamos tecnología para crear oportunidades de aprendizaje, comunicación y desarrollo
          personal en niños con autismo. Creemos en un futuro inclusivo, accesible y colaborativo.
        </p>
      </section>

      <section className="contract">
        <h2>Contrato LKS (Token Oficial en la Blockchain de Polygon)</h2>
        <p>Verifica, explora y conecta con total transparencia.</p>
        <p>
          <strong>Dirección del contrato:</strong>{' '}
          <code>0x31EF5a8a8Fa124D7270543c1095A45381740c490</code>
        </p>
        <a
          className="btn"
          href="https://polygonscan.com/token/0x31EF5a8a8Fa124D7270543c1095A45381740c490"
          target="_blank"
        >
          Ver en Polygonscan
        </a>
      </section>

      <section className="collaborate">
        <h2>Obtener Lukas Coin (LKS)</h2>
        <p>Puedes adquirir LKS de forma directa en Uniswap usando MATIC (POL) en la red Polygon.</p>
        <a
          className="btn"
          href="https://app.uniswap.org/#/swap?chain=polygon&outputCurrency=0x31EF5a8a8Fa124D7270543c1095A45381740c490"
          target="_blank"
        >
          Obtener en Uniswap
        </a>
      </section>

      <section className="collaborate">
        <h2>Participa / Colabora</h2>
        <p>
          Si quieres sumarte al proyecto, puedes colaborar desde GitHub o contactar a nuestro
          equipo.
        </p>
        <ul>
          <li>
            <a href="https://github.com/rgdevment/LukasCoin" target="_blank">
              Repositorio en GitHub
            </a>
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
        </ul>
      </section>
    </main>
  )
}
