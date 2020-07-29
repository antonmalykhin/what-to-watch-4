import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import FilmList from '../film-list/film-list.jsx';
import FilmDescription from '../film-description/film-description.jsx';
import withActiveItem from '../../hocks/with-active-item/with-active-item.js';
import Header from '../header/header.jsx';
import Footer from '../footer/footer.jsx';
import {AuthorizationStatus} from '../../reducer/user/user.js';
import {getLikeThisFilms} from '../../utils.js';
import {AppRoute} from '../../const.js';
import history from '../../history.js';

const MORE_LIKE_THIS_FILM_COUNT = 4;

const TABS = [
  `Overview`,
  `Details`,
  `Reviews`
];

const FilmDescriptionWrapped = withActiveItem(FilmDescription, `tabs`);
const FilmListWrapped = withActiveItem(FilmList, `films`);

const FilmPage = (props) => {
  const {
    authorizationStatus,
    currentYear,
    film,
    films,
    onFilmClick,
    onPlayClick,
    addFilmToFavorites
  } = props;

  const {
    id,
    backgroundColor,
    background,
    title,
    genre,
    release,
    poster,
    isFavorite
  } = film;

  const moreLikeThisFilms = getLikeThisFilms(films, film, MORE_LIKE_THIS_FILM_COUNT);

  return (

    <React.Fragment>
      <section className="movie-card movie-card--full"
        style={
          {
            backgroundColor
          }
        }
      >
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src={background} alt={title} />
          </div>

          {<Header classNameModifier={`movie-card`}>
            <div className="user-block">

              {authorizationStatus === AuthorizationStatus.AUTH ? <Link to={AppRoute.MY_LIST}><div className="user-block__avatar"><img src="/img/avatar.jpg" alt="User avatar" width="63" height="63" /></div></Link> : <Link to={AppRoute.LOGIN} className="user-block__link">Sign in</Link>}

            </div>
          </Header>}

          <div className="movie-card__wrap">
            <div className="movie-card__desc">
              <h2 className="movie-card__title">{title}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{genre}</span>
                <span className="movie-card__year">{release}</span>
              </p>

              <div className="movie-card__buttons">
                <button className="btn btn--play movie-card__button" type="button"
                  onClick={() => {
                    onPlayClick(film);
                    history.push(`${AppRoute.FILMS}/${id}${AppRoute.PLAYER}`);
                  }}
                >
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>

                <button className="btn btn--list movie-card__button" type="button"
                  onClick={() => addFilmToFavorites(id, !isFavorite)}
                >
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref={`#${isFavorite ? `in-list` : `add`}`}></use>
                  </svg>
                  <span>My list</span>
                </button>

                {authorizationStatus === AuthorizationStatus.AUTH ? <Link to={`${AppRoute.FILMS}/${id}${AppRoute.REVIEW}`} className="btn movie-card__button">Add review</Link> : ``}

              </div>
            </div>
          </div>
        </div>

        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img src={poster} alt={title} width="218" height="327" />
            </div>

            {<FilmDescriptionWrapped
              tabs={TABS}
              film={film}
            />}

          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          {<FilmListWrapped
            films={moreLikeThisFilms}
            onFilmClick={onFilmClick}
          />}

        </section>

        <Footer year={currentYear}/>
      </div>
    </React.Fragment>
  );
};

FilmPage.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  currentYear: PropTypes.number.isRequired,
  film: PropTypes.object.isRequired,
  films: PropTypes.array.isRequired,
  onFilmClick: PropTypes.func.isRequired,
  onPlayClick: PropTypes.func.isRequired,
  addFilmToFavorites: PropTypes.func.isRequired
};

export default FilmPage;
