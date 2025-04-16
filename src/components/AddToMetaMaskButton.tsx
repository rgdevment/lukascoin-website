import React from 'react'
import { MetaMaskInpageProvider } from '@metamask/providers'

declare global {
  interface Window {
    ethereum?: MetaMaskInpageProvider
  }
}

const AddToMetaMaskButton: React.FC = () => {
  const addLKS = async () => {
    const ethereum = window.ethereum

    if (!ethereum || !ethereum.request) {
      alert('MetaMask no está disponible. Instálalo desde https://metamask.io')
      return
    }

    try {
      const wasAdded = await ethereum.request({
        method: 'wallet_watchAsset',
        params: {
          type: 'ERC20',
          options: {
            address: '0x31EF5a8a8Fa124D7270543c1095A45381740c490',
            symbol: 'LKS',
            decimals: 18,
            image: 'https://lukascoin.cl/lukas_coin_logo_32.svg',
          },
        },
      })

      if (wasAdded) {
        console.log('LKS agregado exitosamente a MetaMask')
      } else {
        console.log('El usuario canceló la acción')
      }
    } catch (error) {
      console.error('Error al agregar LKS a MetaMask:', error)
    }
  }

  return (
    <button className="btn btn-metamask" onClick={addLKS}>
      LKS en MetaMask
    </button>
  )
}

export default AddToMetaMaskButton
