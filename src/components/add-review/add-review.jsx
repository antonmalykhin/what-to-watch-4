import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import Header from '../header/header.jsx';
import Star from '../star/star.jsx';
import history from '../../history';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const.js';

const RATING_STAR_COUNT = 5;
const STARTING_INPUT_VALUE = 1;
const Comment = {
  MIN_LENGTH: 50,
  MAX_LENGTH: 400
};

class AddReview extends PureComponent {
  constructor(props) {
    super(props);

    this.stars = React.createRef();
    this.comment = React.createRef();
    this.form = React.createRef();

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFormDisable = this.handleFormDisable.bind(this);
  }

  handleSubmit(evt) {
    const {film, onSubmit, rating} = this.props;
    const {id} = film;

    evt.preventDefault();

    onSubmit(id, this.handleFormDisable, {
      rating,
      comment: this.comment.current.value
    });
  }

  handleFormDisable(status) {
    const form = this.form.current;

    const inputs = form.querySelectorAll(`input`);
    const textarea = form.querySelector(`textarea`);
    const button = form.querySelector(`button`);

    inputs.forEach((it) => {
      it.disabled = status;
    });
    textarea.disabled = status;
    button.disabled = status;

    form.style = `opacity: ${status ? 0.5 : 1}`;
  }

  render() {
    const {
      film,
      onRatingCheck,
      rating,
      isCommentSend,
      resetWarning
    } = this.props;

    const {
      title,
      background,
      poster
    } = film;

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
                      history.goBack();
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
              this.handleSubmit(evt);
              this.handleFormDisable(true);
            }}
          >
            <div className="rating">
              <div className="rating__stars" ref={this.stars} >

                {new Array(RATING_STAR_COUNT)
                    .fill()
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
                onInput={() => resetWarning()}
                required
              ></textarea>

              <div className="add-review__submit">
                <button className="add-review__btn" type="submit" >Post</button>
              </div>
            </div>
          </form>

          {!isCommentSend ? <p>Review has not been sent. Try again.</p> : null}

        </div>

      </section>
    );
  }
}

AddReview.propTypes = {
  film: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  rating: PropTypes.number.isRequired,
  onRatingCheck: PropTypes.func.isRequired,
  isCommentSend: PropTypes.bool.isRequired,
  resetWarning: PropTypes.func.isRequired
};

export default AddReview;
