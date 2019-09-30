
interface Color {
  color: string
  primary: string
  secondary: string
  black: string
  lightGray: string
  darkGray: string
  white: string
  darkBlue: string
  yellow: string
  starGreen: string
  commentDarkGray: string
  reviewLightGray: string
  pitchBlack: string
  lightBlue: string
}

export const color: Color = {
  color: '#073C87',
  primary: '#3477DC',
  secondary: '#F96A6A',
  black: '#323645',
  pitchBlack: '#505050',
  lightGray: '#aaaaaa',
  darkGray: '#D1D1D1',
  white: '#ffffff',
  darkBlue: '#0D112B',
  yellow: '#FFE975',
  starGreen: '#59C957',
  commentDarkGray: '#999999',
  reviewLightGray: '#B0B0B0',
  lightBlue: '#D3E2F7',
};

interface ZIndex {
  modalOverlay: number,
  modal: number
}

export const zIndex: ZIndex = {
  modalOverlay: 9,
  modal: 10,
};

interface Font {
  primary: string,
  semiPrimary: string
  secondary: string
}

export const font: Font = {
  primary: `'Avenir Next', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB',
  'Microsoft YaHei', 'Helvetica Neue', Helvetica, Arial, sans-serif, 'Apple Color Emoji',
  'Segoe UI Emoji', 'Segoe UI Symbol'`,
  semiPrimary: 'Nunito, sans-serif',
  secondary: 'Montserrat, sans-serif',
};
