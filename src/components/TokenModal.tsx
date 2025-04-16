import React, { useState, useEffect } from 'react'
import AddToMetaMaskButton from './AddToMetaMaskButton'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { TokenList } from '../models/TokenList.tsx'
import { Token } from '../models/Token.tsx'
import { TokenModalProps } from '../models/TokenModalProps.tsx'
import metamask from '../assets/wallets/MetaMask-icon-fox.svg'
import copy from '../assets/wallets/copy.png'
import information from '../assets/wallets/information.png'

const TokenModal: React.FC<TokenModalProps> = ({ isOpen, onClose }) => {
  const [tokenData, setTokenData] = useState<Token | null>(null)
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    if (isOpen) {
      setLoading(true)
      fetch('https://lukascoin.cl/lukas-tokenlist.json')
        .then((res) => res.json())
        .then((data: TokenList) => {
          if (data.tokens && data.tokens.length > 0) {
            setTokenData(data.tokens[0]) // Se asume que el primer token es LukasCoin
          } else {
            toast.error('No se encontró información del token.')
          }
          setLoading(false)
        })
        .catch((err) => {
          console.error(err)
          toast.error('Error al cargar datos del token.')
          setLoading(false)
        })
    }
  }, [isOpen])

  const copyTokenDetails = () => {
    if (tokenData) {
      const details = `Address: ${tokenData.address}\nSymbol: ${tokenData.symbol}\nDecimals: ${tokenData.decimals}`
      navigator.clipboard
        .writeText(details)
        .then(() => toast.success('Detalles del token copiados al portapapeles'))
        .catch(() => toast.error('Error al copiar detalles'))
    }
  }

  if (!isOpen) return null

  return (
    <>
      <div className="modal-overlay" onClick={onClose}></div>
      <div className="modal-container">
        <button className="modal-close" onClick={onClose}>
          ✕
        </button>
        <h2>Agregar token LukasCoin a tu wallet</h2>
        {loading ? (
          <p>Cargando datos...</p>
        ) : (
          <>
            <div className="wallet-grid">
              {/* Opción 1: MetaMask */}
              <div className="wallet-card">
                <img src={metamask} alt="MetaMask" className="wallet-logo" />
                <h3>MetaMask</h3>
                <p>Usa MetaMask para agregar el token de forma automática a tu wallet.</p>
                <AddToMetaMaskButton />
              </div>

              {/* Opción 2: Copiar Datos */}
              <div className="wallet-card">
                <img src={copy} alt="Copiar Datos" className="wallet-logo" />
                <h3>Copiar Datos</h3>
                <p>Copia la información del token para luego pegarla en tu wallet.</p>
                <button className="btn" onClick={copyTokenDetails}>
                  Copiar LKS datos
                </button>
              </div>

              {/* Opción 3: Datos Manuales */}
              <div className="wallet-card">
                <img src={information} alt="Datos Manuales" className="wallet-logo" />
                <h3>Datos Manuales</h3>
                <div className="token-details">
                  {tokenData ? (
                    <>
                      <p>
                        <strong>Address:</strong>
                        <p>
                          <span className="token-address">{tokenData.address}</span>
                        </p>
                      </p>
                      <p>
                        <strong>Symbol:</strong> {tokenData.symbol}
                      </p>
                      <p>
                        <strong>Decimals:</strong> {tokenData.decimals}
                      </p>
                    </>
                  ) : (
                    <p>No se cargaron los datos del token.</p>
                  )}
                </div>
              </div>
            </div>

            <div className="modal-footer-note">
              <p className="footer-text">
                ¿Eres nuevo en el mundo cripto y aún no tienes un wallet? Un wallet es una
                aplicación esencial que te permite almacenar, enviar y recibir criptomonedas de
                forma segura. Te recomendamos usar{' '}
                <a href="https://metamask.io/" target="_blank" rel="noopener noreferrer">
                  MetaMask
                </a>
                , una de las soluciones más populares y fáciles de utilizar.
              </p>
            </div>
            <ToastContainer position="bottom-right" autoClose={3000} />
          </>
        )}
      </div>
    </>
  )
}

export default TokenModal
