import Obfuscate from 'react-obfuscate'
import logo from '../assets/lukas_coin_logo_256.svg'
import '../assets/styles.css'

export default function Contact() {
  return (
    <main>
      <section className="hero">
        <img
          src={logo}
          alt="Logo grande de Lukas Coin"
          style={{ width: '160px', maxWidth: '90%', marginBottom: '1rem' }}
        />
        <div className="hero-content">
          <h1>Contacto</h1>
          <p>
            Estamos felices de escucharte. Este proyecto existe gracias a las ideas, preguntas y
            colaboración de personas como tú.
          </p>
          <p>¿Quieres participar, proponer o saber más? ¡Escríbenos!</p>
        </div>
      </section>

      <section className="info">
        <h2>Escríbenos</h2>
        <p>Para dudas, consultas o colaboración:</p>
        <p>
          <strong>
            <Obfuscate
              email="contacto@lukascoin.cl"
              headers={{ subject: 'Consulta desde Lukas Coin' }}
            />
          </strong>
        </p>

        <h2>Sobre Mario</h2>
        <p>
          Mario es desarrollador de software con más de 15 años de experiencia en tecnologías
          seguras, medios de pago y proyectos Web3. Pero ante todo, es padre de Lucas, un niño con
          autismo que lo inspira a crear tecnología con propósito.
        </p>
        <p>
          Desde Chile impulsa Lukas Coin como un proyecto abierto, gratuito y comunitario — una
          iniciativa que une tecnología e inclusión para mejorar la vida de las personas y sus
          familias.
        </p>

        <ul>
          <li>
            <a href="https://github.com/rgdevment" target="_blank" rel="noopener noreferrer">
              GitHub Personal
            </a>
          </li>
          <li>
            <a href="https://linkedin.com/in/rgdevment" target="_blank" rel="noopener noreferrer">
              Perfil de LinkedIn
            </a>
          </li>
        </ul>

        <h2>Validaciones y Transparencia</h2>
        <p>
          <strong>Wallet de Lukas:</strong> <code>0xC8CA1999b506E403b458A59b59DF2868d1A258AE</code>
        </p>
        <p>
          <strong>Dirección del contrato:</strong>{' '}
          <code>0x31EF5a8a8Fa124D7270543c1095A45381740c490</code>
        </p>
      </section>
    </main>
  )
}
