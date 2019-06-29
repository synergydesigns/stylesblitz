
module.exports = (api) => {
  api.cache(true)
  const presets = ['next/babel', '@zeit/next-typescript/babel', '@babel/preset-typescript']
  return {
    presets,
    plugins: [
      [ 'styled-components', { ssr: true, displayName: true, preprocess: false } ]
    ],
    env: {
      test: {
        plugins: ['require-context-hook', 'macros']
      }
    }
  }
}
