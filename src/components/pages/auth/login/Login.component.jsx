import React, {useState} from 'react';
import {Link} from 'react-router-dom';

import {useUniqueIds} from '../../../../hooks/useUniqueIds';
import Button from '../../../partials/button/Button.component';
import Input from '../../../partials/input/Input.component';
import Main from '../../../structures/main/Main.component';
import './login.style.scss';

const Login = ({history}) => {
  const [loginDetails, setLoginDetails] = useState({email: '', password: ''});
  const [emailId, passwordId, signInBtnId] = useUniqueIds(3);

  const onChangeHandler = (e) => {
    const {name, value} = e.target;
    setLoginDetails({...loginDetails, [name]: value});
  };
  return (
    <Main>
      <div className="login-container">
        <div className="img-and-homeicon-wrapper">
          <img src="https://i.ibb.co/Fx04RtZ/toffee-tea.jpg" alt="" />
          <span onClick={() => history.push('/')}>
            <i className="fa fa-home"></i>
          </span>
        </div>

        <form>
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
  );
};

export default Login;
