import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import Footer from '../footer/footer.jsx';
import Header from '../header/header.jsx';
import history from '../../history';

class SignIn extends PureComponent {
  constructor(props) {
    super(props);

    this.emailRef = React.createRef();
    this.passwordRef = React.createRef();

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(evt) {
    const {onSubmit} = this.props;

    evt.preventDefault();

    onSubmit({
      login: this.emailRef.current.value,
      password: this.passwordRef.current.value,
    });
  }

  render() {
    return (
      <div className="user-page">
        <Header classNameModifier={`user-page`}>

          <h1 className="page-title user-page__title">Sign in</h1>

        </Header>

        <div className="sign-in user-page__content">
          <form
            action="#"
            className="sign-in__form"
            onSubmit={(evt) => {
              this.handleSubmit(evt);
              history.push(`/`);
            }
            }
          >
            <div className="sign-in__fields">
              <div className="sign-in__field">
                <input className="sign-in__input" type="email" placeholder="Email address" name="user-email" id="user-email" ref={this.emailRef} />
                <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
              </div>
              <div className="sign-in__field">
                <input className="sign-in__input" type="password" placeholder="Password" name="user-password" id="user-password" ref={this.passwordRef} autoComplete="currentPassword"/>
                <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
              </div>
            </div>
            <div className="sign-in__submit">
              <button
                className="sign-in__btn"
                type="submit"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>

        <Footer year={2020} />
      </div>
    );
  }
}

SignIn.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SignIn;
