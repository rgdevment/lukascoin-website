import { createConfig, configureChains, WagmiConfig } from 'wagmi'
import { polygon } from 'wagmi/chains'
import { publicProvider } from 'wagmi/providers/public'
import { Web3Modal } from '@web3modal/wagmi/react'
import { EthereumClient, w3mConnectors } from '@web3modal/ethereum'

const projectId = 'TU_PROJECT_ID_WEB3MODAL'

const { chains, publicClient } = configureChains(
    [polygon],
    [publicProvider()]
)

export const wagmiConfig = createConfig({
    autoConnect: true,
    connectors: w3mConnectors({ projectId, chains }),
    publicClient,
})

export const ethereumClient = new EthereumClient(wagmiConfig, chains)
