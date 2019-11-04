export interface DataSource {
  label: string
  value: any
}

export interface DropDownProps {
  value: string
  datasource?: DataSource[]
  onselect?: (label: string, value: any) => void
}

export interface Props {
  data: DataSource[]
  onselect?: (value: string) => void
  onchange?: (value: string) => void
  style?: React.CSSProperties
}
