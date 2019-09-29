import React from 'react';

import { Review } from 'shared/components/Review';
import shortId from 'lib/utils/shortId';
import { VendorReviewContainer } from './VendorReviewStyle';

const VendorReview: React.FC = () => (
  <VendorReviewContainer>
    {
        Array(10).fill(1).map((_, index) => <Review key={shortId(index)} />)
      }
  </VendorReviewContainer>
);

export default VendorReview;
