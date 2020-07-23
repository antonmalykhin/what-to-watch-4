import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import Header from '../header/header.jsx';


class AddReview extends PureComponent {
  constructor(props) {
    super(props);

    this.rating = React.createRef();
    this.review = React.createRef();

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCheck = this.handleCheck.bind(this);

    this.state = {
      rating: `3`,
      review: ``
    };
  }

  handleSubmit(evt) {
    evt.preventDefault();

    const review = this.review.current;
    this.setState({review: review.value});
    console.log(this.state);
    console.log(this.state);
  }

  handleCheck(evt) {

    this.setState({rating: evt.target.value});
  }

  render() {
    const {filmID} = this.props;

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
              <div className="rating__stars" ref={this.rating}>
                <input className="rating__input" id="star-1" type="radio" name="rating" value="1" onChange={this.handleCheck} />
                <label className="rating__label" htmlFor="star-1">Rating 1</label>

                <input className="rating__input" id="star-2" type="radio" name="rating" value="2" onChange={this.handleCheck} />
                <label className="rating__label" htmlFor="star-2">Rating 2</label>

                <input className="rating__input" id="star-3" type="radio" name="rating" value="3" onChange={this.handleCheck} />
                <label className="rating__label" htmlFor="star-3">Rating 3</label>

                <input className="rating__input" id="star-4" type="radio" name="rating" value="4" onChange={this.handleCheck} />
                <label className="rating__label" htmlFor="star-4">Rating 4</label>

                <input className="rating__input" id="star-5" type="radio" name="rating" value="5" onChange={this.handleCheck} />
                <label className="rating__label" htmlFor="star-5">Rating 5</label>
              </div>
            </div>

            <div className="add-review__text">
              <textarea className="add-review__textarea" name="review-text" id="review-text" minLength="50" maxLength="400" placeholder="Review text" ref={this.review}></textarea>

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
  filmID: PropTypes.number.isRequired
};

export default AddReview;
