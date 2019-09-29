import styled from 'styled-components';
import { color, font } from 'shared/global';

export const ReviewContainer = styled.div`
  padding: 15px 0;
  border-bottom: 1px solid #F9F9F9;

  .review-title,
  .review-date {
    font: bold 14px/14px ${font.semiPrimary};
    color: ${color.pitchBlack};
    margin: 5px 0;
    text-transform: capitalize;
  }

  .review-date {
    font-weight: normal;
  }

  .review-reviewer__name {
    font: normal 14px/14px ${font.semiPrimary};
    color: ${color.pitchBlack};
  }

  .review-reply {
    margin-top: 10px;
  }

  .review-reply__button {
    font: bold 16px/20px ${font.semiPrimary};
  }

  .reply-helpful__count {
    display: inline-flex;
    width: fit-content;
    align-self: center;
    
    &:first-child {
      margin-right: 15px;
    }

    p {
      font: normal 14px/18px ${font.semiPrimary};
      color: ${color.commentDarkGray};
      margin-left: 5px;
      text-transform: capitalize;
    } 
  }

  .replies {
    margin-left: 12px;
  }
`;

export const ReviewerImage = styled.div`
  display: flex;
  align-self: flex-start;
`;

export const ReviewText = styled.p`
  font: normal 14px/18px ${font.semiPrimary};
  color: ${color.reviewLightGray};
  margin-bottom: 5px;
`;

export const ReplyContainer = styled.div`
  display: flex;
  .reply_user__name {
    color: ${color.black};
    font: normal 14px/18px ${font.secondary};
  }
  
  .reply_user_type {
    background-color: ${color.secondary};
    font: bold 10px/14px ${font.secondary};
    color: ${color.pitchBlack};
  }
`;
