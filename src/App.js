import { Route, Switch } from 'react-router-dom';
import React, { useState } from 'react';
import { Login } from './pages/Login';
import { Home } from './pages/Home';
import './styles/app.scss';


function App() {

  const [accessToken, setAccessToken] = useState(localStorage.getItem('accessToken'));

  return (
    <Switch>
      {!accessToken ?
        <Route path="*">
          <Login setAccessToken={setAccessToken} />
        </Route>
        :
        <Route path="*">
          <Home setAccessToken={setAccessToken} />
        </Route>
      }
    </Switch>
  );
}

export default App;
