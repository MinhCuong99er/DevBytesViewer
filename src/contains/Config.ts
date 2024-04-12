import getConfig from 'next/config'

const { publicRuntimeConfig, serverRuntimeConfig } = getConfig()
const PAGE_SIZE = publicRuntimeConfig.PAGE_SIZE ? Number(publicRuntimeConfig.PAGE_SIZE) : 10

export default {
  publicRuntimeConfig,
  serverRuntimeConfig,
  PAGE_SIZE,
}
