import * as React from 'react';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';

const Error404: React.FunctionComponent = () => {
  return (
    <div className="error">
      <p className="error__title">404</p>
      <p className="error__text">Page is not found</p>
      <Link className="error__link" to={AppRoute.ROOT}>Back to the main page</Link>
    </div>
  );
};

export default Error404;
