import * as React from 'react'

interface Props {
  userAgent: string,
  params: Object,
  search: Object
}

const Vendor: React.FC<Props> = (props) => {
  return <h1>Vendor listing</h1> 
}

export default Vendor
