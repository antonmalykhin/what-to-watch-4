import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import FilterItem from '../filter-item/filter-item.jsx';

class Filter extends PureComponent {
  constructor(props) {
    super(props);

  }

  render() {
    const {filterItems, state, onFilterItemClick} = this.props;

    return (
      <ul className="catalog__genres-list">
        {filterItems.map((filterItem, index) => {
          return (
            <FilterItem
              key={`${index}-${filterItem}`}
              filterTitle={filterItem}
              onFilterItemClick={onFilterItemClick}
              isActive={state === filterItem}
            />
          );
        })}
      </ul>
    );
  }
}

Filter.propTypes = {
  filterItems: PropTypes.array.isRequired,
  state: PropTypes.string.isRequired,
  onFilterItemClick: PropTypes.func.isRequired,
};

export default Filter;

