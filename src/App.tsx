import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import GlobalStyle from './global/styles';
import Routes from './routes';

const App: React.FC = () => {
  return (
    <Router>
      <Routes />
      <GlobalStyle />
    </Router>
  );
};

export default App;
