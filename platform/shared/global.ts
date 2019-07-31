
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
}

export const color: Color = {
  color: '#073C87',
  primary: '#E0115F',
  secondary: '#FF9907',
  black: '#243C58',
  lightGray: '#aaaaaa',
  darkGray: '#D1D1D1',
  white: '#ffffff',
  darkBlue: '#0D112B',
  yellow: '#FFE975',
  starGreen: '#59C957'
}

interface ZIndex {
  modalOverlay: number,
  modal: number
}

export const zIndex: ZIndex = {
  modalOverlay: 9,
  modal: 10
}

interface Font {
  primary: string,
  semiPrimary: string
  secondary: string
  tertiary: string
}

export const font: Font = {
  primary: 'Nunito SemiBold, sans-serif',
  semiPrimary: 'Nunito, sans-serif',
  secondary: 'Montserrat, sans-serif',
  tertiary: 'Kollektif, Lato, sans-serif'
}
