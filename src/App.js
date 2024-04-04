import React, { useContext } from 'react';
import { Switch, Route } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import HomePage from './Pages/HomePage';
import LoginPage from './Pages/LoginPage';
import SignupPage from './Pages/SignupPage';
import WelcomeEmailPage from './Pages/WelcomeEmailPage';
import authContext from './Store/Context/AuthContext';

const App = () => {

  const authCtx = useContext(authContext);
  const isLoggedIn = authCtx.isLoggedIn;
  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <HomePage />
        </Route>
        <Route path='/signup'>
          <SignupPage />
        </Route>
        <Route path='/login'>
          {!isLoggedIn ? <LoginPage /> : <WelcomeEmailPage />}
        </Route>
      </Switch>
    </Layout>
  );
};

export default App;
