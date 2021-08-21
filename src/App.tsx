import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { ThemeProvider } from '@material-ui/core/styles';
import { theme } from './global/theme';

import Routes from './routes';

const App: React.FC = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </Router>
  );
};

export default App;
