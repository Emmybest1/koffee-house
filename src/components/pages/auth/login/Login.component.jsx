import React, {useState, useEffect} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';

import {signInUserRequest} from '../../../../redux/root.actions';
import {selectIsLoading, selectError, selectIsUserLoggedIn} from '../../../../redux/user/user.selector';
import {useUniqueIds} from '../../../../hooks/useUniqueIds';
import Loader from '../../../partials/loader/Loader.component';
import ApiErrorAlert from '../../../partials/modals/api-error-alert/ApiErrorAlert.component';
import Button from '../../../partials/button/Button.component';
import Input from '../../../partials/input/Input.component';
import Main from '../../../structures/main/Main.component';
import './login.style.scss';

const Login = () => {
  const [loginDetails, setLoginDetails] = useState({email: '', password: ''});
  const [emailId, passwordId, signInBtnId] = useUniqueIds(3);
  const history = useHistory();
  const dispatch = useDispatch();
  const userFetchingIsLoading = useSelector(selectIsLoading);
  const userFetchingError = useSelector(selectError);
  const isUserLoggedIn = useSelector(selectIsUserLoggedIn);

  useEffect(() => {
    if (isUserLoggedIn) {
      history.push('/');
    }
  }, [isUserLoggedIn, history]);

  const onChangeHandler = (e) => {
    const {name, value} = e.target;
    setLoginDetails({...loginDetails, [name]: value});
  };
  return (
    <>
      <Main>
        <div className="login-container">
          <div className="img-and-homeicon-wrapper">
            <img src="https://i.ibb.co/Fx04RtZ/toffee-tea.jpg" alt="" />
            <span onClick={() => history.push('/')}>
              <i className="fa fa-home"></i>
            </span>
          </div>

          <form
            onSubmit={(event) => {
              event.preventDefault();
              window.localStorage.setItem('loginDetails', JSON.stringify(loginDetails));
              dispatch(signInUserRequest(loginDetails));
            }}
          >
            <h3>Welcome to Kffee Huse</h3>
            <p>Sign in to continue</p>

            <Input
              id={emailId}
              type="email"
              name="email"
              labelText="Email"
              value={loginDetails.email}
              placeholder="africlite@gmail.com"
              onChange={onChangeHandler}
              required={true}
            />
            <Input
              id={passwordId}
              type="password"
              name="password"
              labelText="Password"
              value={loginDetails.password}
              placeholder="*************"
              onChange={onChangeHandler}
              required={true}
            />
            <Input id={signInBtnId} type="submit" name="" value="Login" aria-label="Login" />
            <Link to="/reset-password" className="forgot-password">
              Forgot password?
            </Link>
            <Button onClick={() => history.push('/sign-up')}>Sign up</Button>
          </form>
        </div>
      </Main>
      <Loader isLoading={userFetchingIsLoading} />
      <ApiErrorAlert errorHeading="User Sign in Error" apiErrorMessage={userFetchingError} />
    </>
  );
};

export default Login;
