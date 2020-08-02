import * as React from 'react';
import * as PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';

const Header = (props) => {
  const {children, classNameModifier} = props;
  return (
    <React.Fragment>
      <h1 className="visually-hidden">WTW</h1>

      <header className={`page-header ${classNameModifier ? `${classNameModifier}__head` : ``}`}>
        <div className="logo">
          <Link className="logo__link" to={AppRoute.ROOT}>
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </Link>
        </div>

        {children}

      </header>
    </React.Fragment>
  );
};

Header.propTypes = {
  classNameModifier: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
};

export default Header;
