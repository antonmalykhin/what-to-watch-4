import * as React from 'react';

interface Props {
  filterTitle: string;
  onFilterItemClick: (filterTitle: string) => void;
  isActive: boolean;
}

const FilterItem: React.FunctionComponent<Props> = (props: Props) => {
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

export default FilterItem;
