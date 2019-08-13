import React from 'react'

export const Location: React.FC = () => {
  return (
    <svg width="8" height="10" viewBox="0 0 8 10" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M3.79284 10L0.756052 5.83328C-0.691117 3.79144 -0.257973 -1.07583e-05 3.79284 0C7.58693 1.00766e-05 8.27678 3.79144 6.82962 5.83328L3.79284 10ZM3.76542 5.33434C4.80521 5.33434 5.64812 4.49142 5.64812 3.45163C5.64812 2.41184 4.80521 1.56892 3.76542 1.56892C2.72563 1.56892 1.88271 2.41184 1.88271 3.45163C1.88271 4.49142 2.72563 5.33434 3.76542 5.33434Z" fill="#E0115F"/>
    </svg>
  )
}

export default React.memo(Location)