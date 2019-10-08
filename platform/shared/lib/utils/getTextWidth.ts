import { font as defaultFont } from 'shared/global';
import isBrowser from './isBrowser';


const getTextWidth = (
  text: string, size: number = 14, font: string = defaultFont.primary,
): number => {
  if (isBrowser) {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    ctx.font = `${size}px ${font}`;

    return Math.round(ctx.measureText(text).width);
  }

  return 0;
};

export default getTextWidth;
