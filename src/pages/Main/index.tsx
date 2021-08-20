import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../Home';

const Main: React.FC = () => {


  return (
    <div>
      <Switch>
        <Route path="/main/home" exact component={Home} />
      </Switch>
    </div>
  );
};

export default Main;
