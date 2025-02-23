/* eslint-disable */
const fs = require('fs')
const path = require('path')
const dotenv = require('dotenv')

const isProd = process.env.NODE_ENV === 'production'
if (process.env.NODE_ENV === 'production') {
  dotenv.config({ path: path.resolve(process.cwd(), '.env.production') })
} else {
  dotenv.config()
}

module.exports = {
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    domains: [
      'localhost',
      'img.youtube.com',
      'storage.googleapis.com',
      'gravatar.com',
      'admin.mpoint.vn',
      '632466.sgp1.digitaloceanspaces.com',
      'media.meete.co',
    ],
    // path: '/_next/image',
    loader: 'default',
  },
  i18n: {
    // These are all the locales you want to support in
    // your application
    locales: ['vi'],
    // This is the default locale you want to be used when visiting
    // a non-locale prefixed path e.g. `/hello`
    defaultLocale: 'vi',
    // This is a list of locale domains and the default locale they
    // should handle (these are only required when setting up domain routing)
  },
  serverRuntimeConfig: {
    TOKEN_SECRET: 'c540612b-2391-4b3a-83ae-a4ad5a90aa76',
    SECRET_KEY_CONFIRM: 'd54b74ed-2f5e-4cc4-811d-54e413b8868e',
  },
  publicRuntimeConfig: {
    // Will be available on both server and client
    ...process.env,
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.externals.push('jquery')
    }

    return config
  },
}
