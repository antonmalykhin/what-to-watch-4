import React from 'react';
import PropTypes from 'prop-types';
import FilterItem from '../filter-item/filter-item.jsx';


const Filter = (props) => {
  const {
    filterItems,
    currentFilter,
    onFilterClick,
  } = props;

  return (
    <ul className="catalog__genres-list">
      {filterItems.map((filterItem, index) => {
        return (
          <FilterItem
            key={`${index}-${filterItem}`}
            filterTitle={filterItem}
            onFilterItemClick={() => {
              onFilterClick(filterItem);
            }}
            isActive={currentFilter === filterItem}
          />
        );
      })}
    </ul>
  );
};

Filter.propTypes = {
  filterItems: PropTypes.array.isRequired,
  currentFilter: PropTypes.string.isRequired,
  onFilterClick: PropTypes.func.isRequired,
};

export default Filter;

