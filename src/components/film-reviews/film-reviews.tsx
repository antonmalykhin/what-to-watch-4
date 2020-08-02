import * as React from 'react';
import * as PropTypes from 'prop-types';
import ReviewItem from '../review-item/review-item';

const NUM_SLICE_PART = 2;


const FilmReviews = (props) => {
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

FilmReviews.propTypes = {
  comments: PropTypes.array.isRequired
};

export default FilmReviews;