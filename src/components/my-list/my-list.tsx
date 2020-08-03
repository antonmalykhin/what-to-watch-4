import * as React from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import FilmList from '../film-list/film-list';
import withActiveItem from '../../hocks/with-active-item/with-active-item';
import {Film} from '../../types';

interface Props {
  currentYear: number;
  favoriteFilms: Film[];
  loadComments: (id: number | string) => void;
}

const MyList: React.FunctionComponent<Props> = (props: Props) => {

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

export default MyList;
