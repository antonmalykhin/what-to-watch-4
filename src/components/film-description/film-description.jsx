import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import NavItem from '../nav-item/nav-item.jsx';
import FilmOverview from '../film-overview/film-overview.jsx';
import FilmDetails from '../film-details/film-details.jsx';
import FilmReviews from '../film-reviews/film-reviews.jsx';

const NAV_ITEMS = [
  `Overview`,
  `Details`,
  `Reviews`
];

class FilmDescription extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      currentTab: 0
    };
  }

  _renderTab() {
    const {currentTab} = this.state;

    const {film} = this.props;

    switch (currentTab) {
      case 0:
        return (
          <FilmOverview
            rating={film.rating}
            description={film.description}
          />
        );
      case 1:
        return (
          <FilmDetails
            genre={film.genre}
            release={film.release}
            crew={film.crew}
          />
        );
      case 2:
        return (
          <FilmReviews />
        );
    }

    return null;
  }

  render() {
    return (
      <div className="movie-card__desc">
        <nav className="movie-nav movie-card__nav">
          <ul className="movie-nav__list">
            {NAV_ITEMS.map((item, index) => {
              return (
                <NavItem
                  key={`${item}-${index}`}
                  title={item}
                  onNavItemClick={() => {
                    this.setState({currentTab: index});
                  }}
                  isActive={index === this.state.currentTab}
                />
              );
            })}
          </ul>
        </nav>

        {this._renderTab()}

      </div>
    );
  }
}

FilmDescription.propTypes = {
  film: PropTypes.shape({
    background: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    release: PropTypes.number.isRequired,
    poster: PropTypes.string.isRequired,
    rating: PropTypes.shape({
      score: PropTypes.number.isRequired,
      level: PropTypes.string.isRequired,
      count: PropTypes.number.isRequired
    }).isRequired,
    description: PropTypes.string.isRequired,
    crew: PropTypes.shape({
      director: PropTypes.string.isRequired,
      starring: PropTypes.string.isRequired
    }).isRequired
  }).isRequired,
};

export default FilmDescription;
