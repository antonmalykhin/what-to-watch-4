import * as React from 'react';
import {Route, Redirect, RouteProps} from 'react-router-dom';
import {connect} from 'react-redux';
import {AuthorizationStatus} from '../../reducer/user/user';
import {getAuthorizationStatus} from '../../reducer/user/selectors';
import {AppRoute} from '../../const';

type Props = RouteProps & {
  authorizationStatus: string;
  render: (props: RouteProps) => React.ReactNode;
};


const PrivateRoute: React.FunctionComponent<Props> = (props: Props) => {
  const {
    render,
    path,
    exact,
    authorizationStatus
  } = props;

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

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state)
});

export {PrivateRoute};
export default connect(mapStateToProps)(PrivateRoute);
