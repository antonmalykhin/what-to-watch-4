import * as React from 'react';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';

interface Props {
  classNameModifier: string;
  children: React.ReactNode | React.ReactNode[];
}

const Header: React.FunctionComponent<Props> = (props: Props) => {
  const {
    children,
    classNameModifier
  } = props;

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

export default Header;
