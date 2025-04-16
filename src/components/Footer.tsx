import React, { useState } from 'react'
import TokenModal from './TokenModal'
import wallet from '../assets/wallets/wallet.png'

const Footer: React.FC = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false)

  return (
    <>
      <footer>
        <button className="btn" onClick={() => setModalOpen(true)}>
          <img src={wallet} alt="Add to wallet" className="wallet-button" /> Agregar LKS a tu Wallet
        </button>
        <p>&copy; 2025 Lukas Coin. Todos los derechos reservados.</p>
        <p>
          <a href="https://github.com/rgdevment/LukasCoin" target="_blank" rel="noreferrer">
            GitHub
          </a>{' '}
          |{' '}
          <a
            href="https://polygonscan.com/token/0x31EF5a8a8Fa124D7270543c1095A45381740c490"
            target="_blank"
            rel="noreferrer"
          >
            Polygonscan
          </a>
        </p>
      </footer>
      <TokenModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  )
}

export default Footer
