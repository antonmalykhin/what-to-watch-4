import * as React from 'react';
import * as PropTypes from 'prop-types';
import Header from '../header/header';
import Footer from '../footer/footer';
import FilmList from '../film-list/film-list';
import withActiveItem from '../../hocks/with-active-item/with-active-item';

const MyList = (props) => {

  const {
    currentYear,
    favoriteFilms,
    loadComments
  } = props;

  const FilmListWrapped = withActiveItem(FilmList, `films`);

  return (
    <div className="user-page">

      <Header classNameModifier={`user-page`}>
        <h1 className="page-title user-page__title">My list</h1>

        <div className="user-block">
          <div className="user-block__avatar">
            <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
          </div>
        </div>
      </Header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <FilmListWrapped
          films={favoriteFilms}
          loadComments={loadComments}
        />
      </section>

      <Footer year={currentYear} />
    </div>
  );
};

MyList.propTypes = {
  currentYear: PropTypes.number.isRequired,
  favoriteFilms: PropTypes.array.isRequired,
  loadComments: PropTypes.func.isRequired,
};

export default MyList;
