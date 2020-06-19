import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import SmallFilmCard from '../small-film-card/small-film-card.jsx';

class FilmList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isActive: this.props.films[0]
    };
  }

  render() {
    const {films, onFilmTitleClick} = this.props;
    return (
      <div className="catalog__movies-list">
        {films.map((film) => (
          <SmallFilmCard
            key={film.title}
            onFilmTitleClick={onFilmTitleClick}
            onFilmMouseOver={(filmData) => {
              this.setState({isActive: filmData});
            }}
            film={film} />
        ))}
      </div>
    );
  }
}

FilmList.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  })).isRequired,
  onFilmTitleClick: PropTypes.func.isRequired
};

export default FilmList;


