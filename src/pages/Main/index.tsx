import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../Home';

import SideBar from '../../components/SideBar';
import { Container } from './styles';
import Create from '../Create';
import List from '../List';

const Main: React.FC = () => {
  const [open, setOpen] = useState<boolean>(true);

  return (
    <Container>
      <SideBar open={open} onClose={() => setOpen(!open)} />
      <main>
        <Switch>
          <Route path="/main/home" exact component={Home} />
          <Route path="/main/create" exact component={Create} />
          <Route path="/main/list" exact component={List} />
        </Switch>
      </main>

    </Container>
  );
};

export default Main;
