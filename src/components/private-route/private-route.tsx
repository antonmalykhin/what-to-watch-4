import * as React from 'react';
import * as PropTypes from 'prop-types';
import {Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {AuthorizationStatus} from '../../reducer/user/user';
import {getAuthorizationStatus} from '../../reducer/user/selectors';
import {AppRoute} from '../../const';


const PrivateRoute = (props) => {
  const {render, path, exact, authorizationStatus} = props;

  return (
    <Route
      path={path}
      exact={exact}
      render={(params) => {
        return (
          authorizationStatus === AuthorizationStatus.AUTH ? render(params) : <Redirect to={AppRoute.LOGIN} />
        );
      }}
    />
  );
};

PrivateRoute.propTypes = {
  render: PropTypes.func.isRequired,
  path: PropTypes.string.isRequired,
  exact: PropTypes.bool.isRequired,
  authorizationStatus: PropTypes.string.isRequired
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state)
});

export {PrivateRoute};
export default connect(mapStateToProps)(PrivateRoute);
