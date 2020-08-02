import * as React from 'react';
import FilterItem from '../filter-item/filter-item';

interface Props {
  filterItems: string[];
  currentFilter: string;
  onFilterClick: (filterItem: string) => void;
  resetShowedFilms: () => void;
}

const Filter: React.FunctionComponent<Props> = (props: Props) => {
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

export default Filter;
