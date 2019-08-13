import { font as defaultFont } from 'globals'


const IGetTextWidth: (text: string) => Int

const getTextWidth: IGetTextWidth = (text: string, size?: Int = 14, font?: string = defaultFont.primary) => {
  if (document) {
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')
    ctx.font = `${14}px ${font}`

    return Math.round(ctx.measureText(text).width)
  }

  return 0;
}

export default getTextWidth
