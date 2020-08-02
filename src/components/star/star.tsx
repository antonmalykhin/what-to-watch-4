import React from 'react';
import PropTypes from 'prop-types';


const Star = (props) => {
  const {ratingValue, onRatingCheck, isChecked} = props;
  return (<React.Fragment>
    <input className="rating__input" id={`star-${ratingValue}`} type="radio" name="rating" value={`${ratingValue}`} onChange={() => onRatingCheck(ratingValue)} checked={isChecked}/>
    <label className="rating__label" htmlFor={`star-${ratingValue}`} >Rating {`${ratingValue}`}</label>
  </React.Fragment>);
};

Star.propTypes = {
  ratingValue: PropTypes.number.isRequired,
  onRatingCheck: PropTypes.func.isRequired,
  isChecked: PropTypes.bool.isRequired
};

export default Star;
