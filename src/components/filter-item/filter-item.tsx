import React from 'react';
import PropTypes from 'prop-types';

const FilterItem = (props) => {
  const {
    filterTitle,
    onFilterItemClick,
    isActive
  } = props;

  const activeCLass = `catalog__genres-item ${isActive ? `catalog__genres-item--active` : ``}`;

  return (
    <li className={activeCLass}>
      <a
        href="#"
        onClick={(evt) => {
          evt.preventDefault();
          onFilterItemClick(filterTitle);
        }}
        className="catalog__genres-link"
      >
        {filterTitle}
      </a>
    </li>
  );
};

FilterItem.propTypes = {
  filterTitle: PropTypes.string.isRequired,
  onFilterItemClick: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired
};

export default FilterItem;
