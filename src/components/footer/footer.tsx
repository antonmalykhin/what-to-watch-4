import * as React from 'react';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';

interface Props {
  year: number;
}

const Footer: React.FunctionComponent<Props> = (props: Props) => {
  const {year} = props;

  return (
    <footer className="page-footer">
      <div className="logo">
        <Link to={AppRoute.ROOT} className="logo__link logo__link--light">
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </Link>
      </div>

      <div className="copyright">
        <p>© {year} What to watch Ltd.</p>
      </div>
    </footer>
  );
};

export default Footer;
