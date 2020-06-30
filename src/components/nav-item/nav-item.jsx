import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

class NavItem extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {title, onNavItemClick, isActive} = this.props;
    const activeClass = `movie-nav__item ${isActive ? `movie-nav__item--active` : ``}`;

    return (
      <li className={activeClass}>
        <a href="#" className="movie-nav__link"
          onClick={(evt) => {
            evt.preventDefault();
            onNavItemClick();
          }}
        >
          {title}
        </a>
      </li>
    );
  }
}

NavItem.propTypes = {
  title: PropTypes.string.isRequired,
  onNavItemClick: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired
};

export default NavItem;
