import React from 'react';
import PropTypes from 'prop-types';
import {getFormattedDate} from '../../utils.js';

const ReviewItem = (props) => {
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

ReviewItem.propTypes = {
  review: PropTypes.object.isRequired
};

export default ReviewItem;
