import React from 'react';
import { RouteProps, Redirect, Route } from 'react-router-dom';

interface Props extends RouteProps {
    isAuthenticated: boolean
    //eslint-disable-next-line
    component: any
}

const PrivateRoute: React.FC<Props> = ({ isAuthenticated, component: Component, ...rest }: Props) => (
  <Route
    {...rest}
    render={props => (
      isAuthenticated
        ? <Component {...props}/>
        : <Redirect to={{ pathname: '/auth/login', state: { from: props.location }}}/>
    )}
  />
);

export default PrivateRoute;
