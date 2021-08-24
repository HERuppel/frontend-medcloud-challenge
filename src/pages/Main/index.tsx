import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../Home';

import SideBar from '../../components/SideBar';
import useStyles from './styles';
import Create from '../Create';
import List from '../List';
import { PatientApiProvider } from '../../hooks/patientApi';

const Main: React.FC = () => {
  const classes = useStyles();
  const [open, setOpen] = useState<boolean>(true);

  return (
    <div className={classes.container}>
      <SideBar open={open} onClose={() => setOpen(!open)} />
      <main className={classes.main}>
        <Switch>
          <Route path="/main/home" exact component={Home} />
          <PatientApiProvider>
            <Switch>
              <Route path="/main/create" exact component={Create} />
              <Route path="/main/list" exact component={List} />
            </Switch>
          </PatientApiProvider>
        </Switch>
      </main>

    </div>
  );
};

export default Main;
