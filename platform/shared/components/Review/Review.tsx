import React from "react";
import { Flex } from "antd-mobile";

import StarRating from "../StarRating";
import { ReviewContainer, ReviewText, ReviewerImage } from "./ReviewStyle";
import { Thumbs } from "shared/icons";
import { ProfileImage } from "../Image";
import Reply from "./Reply";

interface Prop {}

const Review: React.FC<Prop> = () => {
  return (
    <ReviewContainer>
      <Flex>
        <ReviewerImage className="review-reviewer__image">
          <ProfileImage width="30px" height="30px" image="https://picsum.photos/id/26/450/450" />
        </ReviewerImage>
        <Flex.Item>
          <Flex>
            <Flex.Item>
              <StarRating rating={5} />
              <h1 className="review-title">Hair braiding</h1>
            </Flex.Item>
            <p className="review-date">3 Days Ago</p>
          </Flex>
          <ReviewText>
            I went in for my appointment before time and I was warmly received, I
            also got athere was no time wasting, I was attended to on time. The
            service was impeccable
          </ReviewText>
          <h3 className="review-reviewer__name">Manuel N.</h3>
          <Flex className="review-reply" justify="between">
            <Flex.Item>
              <h1 className="review-reply__button">Reply</h1>
            </Flex.Item>
            <div className="reply-helpful">
              <div className="reply-helpful__count">
                <Thumbs rotate="down" />
                <p>helpful (8)</p>
              </div>
              <div className="reply-helpful__count">
                <Thumbs rotate="down" />
                <p>helpful (8)</p>
              </div>
            </div>
          </Flex>  
        </Flex.Item>
      </Flex>
    </ReviewContainer>
  );
};

export default Review;
