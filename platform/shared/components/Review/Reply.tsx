import React from 'react'
import WingBlank from 'antd-mobile/lib/wing-blank';
import Flex from 'antd-mobile/lib/flex';

import { ProfileImage } from "../Image";
import { ReplyContainer, ReviewText, ReviewerImage } from './ReviewStyle'


const Reply: React.FC = () => {
  return (
    <ReplyContainer>
      <ReviewerImage>
        <ProfileImage width="30px" height="30px" image="https://picsum.photos/id/26/450/450" />
      </ReviewerImage>
      <WingBlank size="md">
        <Flex>
          <h1 className="reply_user__name">Stephanie D</h1>
          <div className="reply_user_type">
            <p>vendor</p>
          </div>
        </Flex>
        <ReviewText>
          I also had a great experience when I visted Utopia, they are so professional,
          I will definitely be going ack there.
        </ReviewText>
      </WingBlank>
    </ReplyContainer>
  )
}

export default Reply
