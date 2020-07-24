import React from 'react';
import PropTypes from 'prop-types';

const Header = (props) => {
  const {children, classNameModifier} = props;
  return (
    <React.Fragment>
      <h1 className="visually-hidden">WTW</h1>

      <header className={`page-header ${classNameModifier}__head`}>
        <div className="logo">
          <a className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
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
