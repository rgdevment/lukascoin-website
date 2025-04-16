import logo from '../assets/lukas_coin_logo_256.svg'
import wallet from '../assets/wallets/wallet.png'
import TokenModal from '../components/TokenModal.tsx'
import { useState } from 'react'

export default function Docs() {
  const [modalOpen, setModalOpen] = useState<boolean>(false)

  return (
    <main>
      <section className="hero">
        <img
          src={logo}
          alt="Logo de Lukas Coin"
          style={{ width: '160px', maxWidth: '90%', marginBottom: '1rem' }}
        />
        <div className="hero-content">
          <h1>Documentación Oficial</h1>
          <p>Todo lo que necesitas para agregar, usar y comprender Lukas Coin (LKS).</p>
        </div>
      </section>

      <section className="info">
        <h2>Agregar LKS a tu Wallet</h2>

        <button className="btn" onClick={() => setModalOpen(true)}>
          <img src={wallet} alt="Add to wallet" className="wallet-button" /> Agregar LKS a tu Wallet
        </button>

        <h3>🛠️ Datos técnicos</h3>
        <ol>
          <li>
            Estamos en la red de <strong>Polygon</strong>.
          </li>
          <li>
            Si no tienes la red Polygon configurada, usa:
            <pre>
              {`Nombre: Polygon Mainnet
RPC URL: https://polygon-rpc.com
Chain ID: 137
Símbolo: MATIC
Explorador: https://polygonscan.com`}
            </pre>
          </li>
          <li>
            Agrega el token manualmente con:
            <pre>
              {`Dirección del contrato: 0x31EF5a8a8Fa124D7270543c1095A45381740c490
Símbolo: LKS
Decimales: 18`}
            </pre>
          </li>
        </ol>
      </section>

      <section className="info">
        <h2>Detalles Técnicos</h2>
        <ul>
          <li>
            <strong>Nombre:</strong> Lukas Coin
          </li>
          <li>
            <strong>Símbolo:</strong> LKS
          </li>
          <li>
            <strong>Red:</strong> Polygon PoS
          </li>
          <li>
            <strong>Decimales:</strong> 18
          </li>
          <li>
            <strong>Suministro total:</strong> 42.000.000 LKS
          </li>
        </ul>
      </section>

      <section className="info">
        <h2>🎯 Obtener Lukas Coin (LKS)</h2>
        <p>
          Puedes adquirir LKS en <strong>Uniswap</strong> usando POL (antes MATIC) en la red
          Polygon:
        </p>
        <a
          className="btn"
          href="https://app.uniswap.org/#/swap?chain=polygon&outputCurrency=0x31EF5a8a8Fa124D7270543c1095A45381740c490"
          target="_blank"
        >
          Obtener en Uniswap
        </a>
      </section>

      <section className="info">
        <h2>🧩 Recursos Oficiales</h2>
        <ul>
          <li>
            <a href="https://lukascoin.cl/lukas-tokenlist.json" target="_blank">
              Lista de Tokens (lukas-tokenlist.json)
            </a>
          </li>
          <li>
            <a
              href="https://raw.githubusercontent.com/rgdevment/LukasCoin/main/resources/info.json"
              target="_blank"
            >
              info.json (versión RAW)
            </a>
          </li>
          <li>
            <a href="https://github.com/rgdevment/LukasCoin" target="_blank">
              Repositorio en GitHub
            </a>
          </li>
          <li>
            <a
              href="https://polygonscan.com/token/0x31EF5a8a8Fa124D7270543c1095A45381740c490"
              target="_blank"
            >
              Contrato en Polygonscan
            </a>
          </li>
        </ul>
      </section>
      <TokenModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </main>
  )
}
