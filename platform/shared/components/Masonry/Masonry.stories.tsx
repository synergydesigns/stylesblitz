import React from 'react';
import { storiesOf } from '@storybook/react';

import { Masonry, MasonryItem } from './index';

const images = [
  'https://picsum.photos/id/237/200/300',
  'https://picsum.photos/id/26/450/450',
  'https://picsum.photos/id/26/200/450',
  'https://picsum.photos/id/26/450/450',
  'https://picsum.photos/id/26/300/450',
  'https://picsum.photos/id/26/450/450',
  'https://picsum.photos/id/26/450/250',
  'https://picsum.photos/id/26/450/450',
  'https://picsum.photos/id/26/450/450',
  'https://picsum.photos/id/26/450/450',
  'https://picsum.photos/id/26/300/450',
  'https://picsum.photos/id/275/450/550',
  'https://picsum.photos/id/900/450/280',
];

storiesOf('Shared|Masonry', module)
  .add('2 colum', () => (
    <Masonry columnCount={2}>
      {
          images.map(image => (
            <MasonryItem>
              <img src={image} alt={image} />
            </MasonryItem>
          ))
      }
    </Masonry>
  ))
  .add('3 colum', () => (
    <Masonry columnCount={3}>
      {
          images.map(image => (
            <MasonryItem>
              <img src={image} alt={image} />
            </MasonryItem>
          ))
      }
    </Masonry>
  ))
  .add('4 colum', () => (
    <Masonry columnCount={4}>
      {
          images.map(image => (
            <MasonryItem>
              <img src={image} alt={image} />
            </MasonryItem>
          ))
      }
    </Masonry>
  ));
