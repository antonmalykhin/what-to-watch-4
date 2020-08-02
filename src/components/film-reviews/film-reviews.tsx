import * as React from 'react';
import ReviewItem from '../review-item/review-item';
import {Comment} from '../../types';

const NUM_SLICE_PART = 2;

interface Props {
  comments: Comment[]

};

const FilmReviews: React.FunctionComponent<Props> = (props: Props) => {
  const {
    comments
  } = props;

  const sortedComments = comments.slice().sort((a, b) => b.rating - a.rating);
  const commentsForLeftColl = sortedComments.slice(0, Math.round(sortedComments.length / NUM_SLICE_PART));
  const commentForRightColl = sortedComments.slice(Math.round(sortedComments.length / NUM_SLICE_PART), sortedComments.length);

  return (
    <div className="movie-card__reviews movie-card__row">
      <div className="movie-card__reviews-col">
        {commentsForLeftColl.map((comment) => (
          <ReviewItem
            key={comment.id}
            review={comment}
          />
        ))}
      </div>
      <div className="movie-card__reviews-col">
        {commentForRightColl.map((comment) => (
          <ReviewItem
            key={comment.id}
            review={comment}
          />
        ))}
      </div>
    </div>
  );
};

export default FilmReviews;
