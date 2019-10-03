import React from 'react';
import { Flex, WhiteSpace } from 'antd-mobile';

import shortId from 'lib/utils/shortId';
import { Masonry, MasonryItem } from 'shared/components/Masonry';
import { H1 } from 'shared/components/Text';

const assets = [
  'https://picsum.photos/id/237/200/300',
  'https://picsum.photos/id/26/450/450',
  'https://picsum.photos/id/26/200/450',
  'https://picsum.photos/id/36/450/450',
  'https://picsum.photos/id/26/300/450',
  'https://picsum.photos/id/76/450/450',
  'https://picsum.photos/id/26/450/250',
  'https://picsum.photos/id/896/450/450',
  'https://picsum.photos/id/26/450/450',
  'https://picsum.photos/id/26/450/450',
  'https://picsum.photos/id/26/300/450',
  'https://picsum.photos/id/275/450/550',
  'https://picsum.photos/id/900/450/280',
  'https://picsum.photos/id/930/450/280',
  'https://picsum.photos/id/940/450/280',
  'https://picsum.photos/id/60/450/280',
].map(url => ({ url }));

const vendorGallery: React.FC = () => (
  <Flex justify="center" align="center" direction="column">
    <WhiteSpace size="lg" />
    <H1 size="12px">9 / 200 photos</H1>
    <WhiteSpace size="lg" />
    <Masonry columnCount={2}>
      {
          assets.map((asset, index) => (
            <MasonryItem key={shortId(index)}>
              <img alt={asset.url} src={asset.url} />
            </MasonryItem>
          ))
        }
    </Masonry>
  </Flex>
);

export default vendorGallery;
