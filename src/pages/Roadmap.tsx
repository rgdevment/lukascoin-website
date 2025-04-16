import logo from '../assets/lukas_coin_logo_256.svg'

export default function Roadmap() {
  return (
    <main>
      <section className="hero">
        <img
          src={logo}
          alt="Logo de Lukas Coin"
          style={{ width: 160, maxWidth: '90%', marginBottom: '1rem' }}
        />
        <div className="hero-content">
          <h1>Roadmap</h1>
          <p>
            Nuestra hoja de ruta es un reflejo del compromiso con la inclusión, la tecnología y la
            colaboración comunitaria. Lukas Coin se construye paso a paso, escuchando a las
            familias, profesionales y desarrolladores que sueñan con un futuro más justo.
          </p>
        </div>
      </section>

      <section className="info">
        <h2>🔭 Visión a Largo Plazo</h2>
        <p>
          Crear un ecosistema Web3 inclusivo, accesible y descentralizado que potencie el desarrollo
          y la comunicación de niños y niñas con autismo. Queremos que la tecnología no sea un
          privilegio, sino una herramienta al alcance de todos.
        </p>
      </section>

      <section className="info">
        <h2>🎯 Próximos Objetivos</h2>
        <ul>
          <li>
            🧩 Diseñar herramientas educativas digitales y gratuitas para familias y educadores.
          </li>
          <li>
            🖼️ Construir el repositorio PECS 2.0: un banco de imágenes y pictogramas colaborativo.
          </li>
          <li>
            🌐 Explorar integraciones Web3 que promuevan la participación y gobernanza inclusiva.
          </li>
          <li>👥 Lanzar y moderar nuestra comunidad oficial en Discord y otras redes.</li>
          <li>
            📚 Registrar el proyecto en plataformas como TokenLists, CoinGecko y marketplaces
            educativos Web3.
          </li>
          <li>🗳️ Implementar votaciones comunitarias para definir prioridades del roadmap.</li>
          <li>
            🧠 Investigar tecnologías BCI enfocadas en comunicación aumentativa, cuando se cuente
            con apoyo financiero suficiente.
          </li>
        </ul>
      </section>

      <section className="info">
        <h2>🚧 Roadmap Vivo</h2>
        <p>
          Este roadmap no es estático: evoluciona con cada colaboración, aporte o nueva necesidad
          detectada por nuestra comunidad.
        </p>
        <p>
          Próximamente iremos actualizando el progreso y desbloqueando nuevas metas en esta misma
          sección.
        </p>
      </section>

      <section className="info">
        <h2>🤝 Súmate y Colabora</h2>
        <p>
          Lukas Coin es un proyecto abierto, sin fines de lucro y en construcción colectiva.
          Cualquier idea, propuesta o ayuda cuenta.
        </p>
        <p>
          ¿Eres desarrollador, diseñador, terapeuta, padre o simplemente te inspira la causa?
          <strong> ¡Este proyecto también es tuyo!</strong>
        </p>
      </section>
    </main>
  )
}
