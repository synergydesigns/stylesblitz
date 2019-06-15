import React from 'react'

import {
  PopularServiceWrapper,
  SectionHeader,
  PopularListItemWrapper
} from './Styles'
import Common from '../Common'

const Popular = () => {
  return (
    <section>
      <SectionHeader>popular service</SectionHeader>
      <PopularListItemWrapper>
        {
          [
            'fitness',
            'spa',
            'nails',
            'fashion',
            'stylist',
            { name: 'eye brows & lashes', 'image': 'eyebrow'}, // @TODO make sure datatype is the same. I'm lazy now
            'barbing',
            'makeup'
          ].map((service, index) => <Common.PopularListItem
              key={index}
              image={`/static/images/thumbnail/${service.image || service}.png`}
              name={service.name || service} />
            )
        }
      </PopularListItemWrapper>
    </section>
  )
}

export default Popular
