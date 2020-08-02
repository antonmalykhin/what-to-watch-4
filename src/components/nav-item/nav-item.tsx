import * as React from 'react';

interface Props {
  title: string,
  onNavItemClick: () => void,
  isActive: boolean
};

const NavItem: React.FunctionComponent<Props> = (props: Props) => {
  const {
    title,
    onNavItemClick,
    isActive
  } = props;

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
};

export default NavItem;
