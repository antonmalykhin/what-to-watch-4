import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import Header from '../header/header.jsx';
import Star from '../star/star.jsx';

const RATING_STAR_COUNT = 5;
const STARTING_INPUT_VALUE = 1;

class AddReview extends PureComponent {
  constructor(props) {
    super(props);

    this.stars = React.createRef();
    this.comment = React.createRef();

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(evt) {
    const {filmID, onSubmit, rating} = this.props;

    evt.preventDefault();

    onSubmit(filmID, {
      rating,
      comment: this.comment.current.value
    });
  }

  render() {
    const {onRatingCheck, rating} = this.props;

    return (
      <section className="movie-card movie-card--full">
        <div className="movie-card__header">
          <div className="movie-card__bg">
            <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <Header classNameModifier={``}>
            <nav className="breadcrumbs">
              <ul className="breadcrumbs__list">
                <li className="breadcrumbs__item">
                  <a href="movie-page.html" className="breadcrumbs__link">The Grand Budapest Hotel</a>
                </li>
                <li className="breadcrumbs__item">
                  <a className="breadcrumbs__link">Add review</a>
                </li>
              </ul>
            </nav>

            <div className="user-block">
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
              </div>
            </div>
          </Header>

          <div className="movie-card__poster movie-card__poster--small">
            <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218" height="327" />
          </div>
        </div>

        <div className="add-review">
          <form action="#" className="add-review__form" onSubmit={this.handleSubmit}>
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
              <textarea className="add-review__textarea" name="review-text" id="review-text" minLength="50" maxLength="400" placeholder="Review text" ref={this.comment} required></textarea>

              <div className="add-review__submit">
                <button className="add-review__btn" type="submit" >Post</button>
              </div>

            </div>
          </form>
        </div>

      </section>
    );
  }
}

AddReview.propTypes = {
  filmID: PropTypes.number.isRequired,
  onSubmit: PropTypes.func.isRequired,
  rating: PropTypes.number.isRequired,
  onRatingCheck: PropTypes.func.isRequired
};

export default AddReview;
