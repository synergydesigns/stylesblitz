
module.exports = (api) => {
  api.cache(true)
  const presets = ['next/babel', '@zeit/next-typescript/babel']
  return {
    presets,
    plugins: [
      [ 'styled-components', { ssr: true, displayName: true, preprocess: false } ]
    ],
    env: {
      test: {
        presets: ['@babel/preset-typescript'],
        plugins: ['require-context-hook', 'macros']
      }
    }
  }
}
