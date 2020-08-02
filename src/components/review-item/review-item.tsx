import * as React from 'react';
import {getFormattedDate} from '../../utils';
import {Comment} from '../../types';

interface Props {
  review: Comment
};

const ReviewItem: React.FunctionComponent<Props> = (props: Props) => {
  const {review} = props;

  const {
    comment,
    date,
    rating,
    user
  } = review;

  const {name} = user;

  const formattedDate = getFormattedDate(new Date(date));

  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{comment}</p>

        <footer className="review__details">
          <cite className="review__author">{name}</cite>
          <time className="review__date" dateTime="2016-12-20">{formattedDate}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{rating}</div>
    </div>
  );
};

export default ReviewItem;
