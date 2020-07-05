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
    const {films, onFilmClick} = this.props;

    return (
      <div className="catalog__movies-list">
        {films.map((film, index) => (
          <SmallFilmCard
            key={`${index}-${film.title}`}
            onFilmClick={onFilmClick}
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
  onFilmClick: PropTypes.func.isRequired
};

export default FilmList;


