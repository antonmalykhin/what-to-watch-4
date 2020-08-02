import * as React from 'react';
import * as PropTypes from 'prop-types';
import FilterItem from '../filter-item/filter-item';


const Filter = (props) => {
  const {
    filterItems,
    currentFilter,
    onFilterClick,
    resetShowedFilms
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
              resetShowedFilms();
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
  resetShowedFilms: PropTypes.func.isRequired
};

export default Filter;

