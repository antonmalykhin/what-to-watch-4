import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

class FilmOverview extends PureComponent {
  constructor(props) {
    super(props);

  }

  render() {
    const {rating, description} = this.props;
    const {score, level, count} = rating;

    return (
      <React.Fragment>
        <div className="movie-rating">
          <div className="movie-rating__score">{score}</div>
          <p className="movie-rating__meta">
            <span className="movie-rating__level">{level}</span>
            <span className="movie-rating__count">{count} ratings</span>
          </p>
        </div>

        <div className="movie-card__text">
          {description}
        </div>
      </React.Fragment>
    );
  }
}

FilmOverview.propTypes = {
  rating: PropTypes.shape({
    score: PropTypes.number.isRequired,
    level: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired
  }).isRequired,
  description: PropTypes.string.isRequired
};

export default FilmOverview;

