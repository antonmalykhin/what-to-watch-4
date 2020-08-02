import * as React from 'react';
import {connect} from 'react-redux';
import Header from '../header/header';
import Star from '../star/star';
import history from '../../history';
import {Link} from 'react-router-dom';
import {getCurrentFilm} from '../../utils';
import {AppRoute} from '../../const';
import {getIsCommentSend} from '../../reducer/data/selectors';
import {ActionCreator} from '../../reducer/data/data';
import {Film, Match} from '../../types';

const RATING_STAR_COUNT = 5;
const STARTING_INPUT_VALUE = 1;
const Comment = {
  MIN_LENGTH: 50,
  MAX_LENGTH: 400
};

interface Props {
  films: Film[],
  onSubmit: (
    id : string | number,
    {
      rating,
      comment
    }: {
      rating: number | string,
      comment: string
    },
    onSuccess: () => void,
    onError: () => void
    ) => void,
  rating: number,
  onRatingCheck: () => void,
  isCommentSend: boolean,
  resetErrorMessage: () => void,
  match: Match
}

class AddReview extends React.PureComponent<Props, {}> {
  private stars: React.RefObject<HTMLDivElement>;
  private comment: React.RefObject<HTMLTextAreaElement>;
  private form: React.RefObject<HTMLFormElement>;

  constructor(props) {
    super(props);

    this.stars = React.createRef();
    this.comment = React.createRef();
    this.form = React.createRef();

    this._handleSubmit = this._handleSubmit.bind(this);
    this._handleFormDisable = this._handleFormDisable.bind(this);
  }

  _handleSubmit(evt) {
    const {
      films,
      onSubmit,
      rating,
      match,
    } = this.props;

    const currentFilm = getCurrentFilm(films, match.params.id);
    const {id} = currentFilm;

    evt.preventDefault();

    onSubmit(id, {
      rating,
      comment: this.comment.current.value
    },
    () => {
      this._handleFormDisable(false);
      history.push(`${AppRoute.FILMS}/${id}`);
    },
    () => {
      this._handleFormDisable(false);
    });
  }

  _handleFormDisable(status) {
    const form = this.form.current;

    const inputs = form.querySelectorAll(`input`);
    const textarea = form.querySelector(`textarea`);
    const button = form.querySelector(`button`);

    inputs.forEach((it) => {
      it.disabled = status;
    });
    textarea.disabled = status;
    button.disabled = status;

    form.setAttribute(`opacity`, `${status ? 0.5 : 1}`);
  }

  render() {
    const {
      films,
      onRatingCheck,
      rating,
      isCommentSend,
      match,
      resetErrorMessage
    } = this.props;

    const currentFilm = getCurrentFilm(films, match.params.id);

    const {
      id,
      title,
      background,
      poster
    } = currentFilm;

    return (
      <section className="movie-card movie-card--full">
        <div className="movie-card__header">
          <div className="movie-card__bg">
            <img src={background} alt={title} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <Header classNameModifier={``}>
            <nav className="breadcrumbs">
              <ul className="breadcrumbs__list">
                <li className="breadcrumbs__item">
                  <a href="movie-page.html" className="breadcrumbs__link"
                    onClick={(evt) => {
                      evt.preventDefault();
                      history.push(`${AppRoute.FILMS}/${id}`);
                    }}
                  >{title}</a>
                </li>
                <li className="breadcrumbs__item">
                  <a className="breadcrumbs__link">Add review</a>
                </li>
              </ul>
            </nav>

            <div className="user-block">
              <div className="user-block__avatar">
                <Link to={AppRoute.MY_LIST}>
                  <img src="/img/avatar.jpg" alt="User avatar" width="63" height="63" />
                </Link>
              </div>
            </div>
          </Header>

          <div className="movie-card__poster movie-card__poster--small">
            <img src={poster} alt={title} width="218" height="327" />
          </div>
        </div>

        <div className="add-review">
          <form
            ref={this.form}
            action="#"
            className="add-review__form"
            onSubmit={(evt) => {
              this._handleSubmit(evt);
              this._handleFormDisable(true);
            }}
          >
            <div className="rating">
              <div className="rating__stars" ref={this.stars} >

                {new Array(RATING_STAR_COUNT)
                    .fill(``)
                    .map((it, index) => {
                      const shiftedIndex = index + STARTING_INPUT_VALUE;
                      return (
                        <Star key={`key-${shiftedIndex}`} ratingValue={shiftedIndex} onRatingCheck={onRatingCheck} isChecked={shiftedIndex === rating} />
                      );
                    })
                }
              </div>
            </div>

            <div className="add-review__text">
              <textarea
                className="add-review__textarea"
                name="review-text"
                id="review-text"
                minLength={Comment.MIN_LENGTH}
                maxLength={Comment.MAX_LENGTH}
                placeholder="Review text"
                ref={this.comment}
                onInput={() => {
                  resetErrorMessage();
                }}
                required
              ></textarea>

              <div className="add-review__submit">
                <button className="add-review__btn" type="submit" >Post</button>
              </div>
            </div>
          </form>

          {!isCommentSend ? <p>Review has not been sent. Try again later.</p> : null}

        </div>

      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  isCommentSend: getIsCommentSend(state)
});

const mapDispatchToProps = (dispatch) => ({
  resetErrorMessage() {
    dispatch(ActionCreator.sendComment(true));
  }
});

export {AddReview};
export default connect(mapStateToProps, mapDispatchToProps)(AddReview);
