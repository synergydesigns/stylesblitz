export interface DataSource {
  label: string
  value: any
}

export interface DropDownProps {
  value: string
  datasource?: DataSource[]
  onselect?: (label: string, value: any) => void
  fullPage?: boolean
  loading?: boolean
}

export interface Props {
  onselect?: (value: string) => void
  onchange?: (value: string) => void
  onfocus?: () => void
  onblur?: () => void
  data: DataSource[]
  style?: React.CSSProperties
  fullPage?: boolean
  loading?: boolean
  placeholder?: string
  width?: string
}
