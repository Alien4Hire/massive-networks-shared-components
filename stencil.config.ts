import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'mass',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
      copy: [
        {
          src: 'common/**',
          dest: '',
          warn: true,
        }
      ]
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
  plugins: [
    sass({
      injectGlobalPaths: [
        'src/common/scss/global.scss',
        'src/common/scss/tokens.scss',
        'src/common/scss/colors.scss'
      ]
    })
  ],
  testing: {
    browserHeadless: "new",
    transform: {
      "^.+\\.(ts|tsx|js|jsx|css)$": "@stencil/core/testing/jest-preprocessor",
    },
    moduleNameMapper: {
      "^.+\\.svg$": "jest-svg-transformer",
    },
  }
};
