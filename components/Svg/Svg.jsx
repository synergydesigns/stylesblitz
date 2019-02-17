import React from 'react'
import PropTypes from 'prop-types'

import paths from "./paths";

 const Svg = ({ width, height, icon, fill }) => {
  const path = paths[icon]
  const viewBox =  path.viewBox || `0 0 ${width} ${height}`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" 
      width={width}
      height={height}
      fill={fill} 
      viewBox={viewBox}><path d={path.d} />
    </svg>
  )
}

Svg.propTypes = {
  width: PropTypes.integer,
  height: PropTypes.integer,
  icon: PropTypes.string.isRequired
}

Svg.defaultPros = {
  width: 18,
  height: 18,
  fill: '#ccc'
}

export default Svg