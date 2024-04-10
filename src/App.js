import React, { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import HomePage from './Pages/HomePage';
import LoginPage from './Pages/LoginPage';
import SignupPage from './Pages/SignupPage';
import WelcomeEmailPage from './Pages/WelcomeEmailPage';
import authContext from './Store/Context/AuthContext';
import EmailOptions from './Components/EmailBox/EmailOptions';

const App = () => {

  const authCtx = useContext(authContext);
  const isLoggedIn = authCtx.isLoggedIn;
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/signup' element={<SignupPage />} />
        <Route path='/login' element={!isLoggedIn ? <LoginPage /> : <WelcomeEmailPage />} />
      </Routes>
      <EmailOptions />
    </Layout>
  );
};

export default App;
