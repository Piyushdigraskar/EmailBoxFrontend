import { Link } from 'react-router-dom';
import authContext from '../../Store/Context/AuthContext';
import classes from './MainNavigation.module.css';
import { useContext } from 'react';

const MainNavigation = () => {
  const authCtx = useContext(authContext);

  const SubmitHandler = ()=>{
    authCtx.logout();
  }
  return (
    <header className={classes.header}>
      <Link to='/'>
        <div className={classes.logo}>Em@il</div>
      </Link>
      <nav>
        <ul>
          {!authCtx.isLoggedIn && <li>
            <Link to='/signup'>Signup</Link>
          </li>}
          {!authCtx.isLoggedIn && <li>
            <Link to='/login'>Login</Link>
          </li>}
          {authCtx.isLoggedIn && <li>
            <button onClick={SubmitHandler}>Logout</button>
          </li>}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;