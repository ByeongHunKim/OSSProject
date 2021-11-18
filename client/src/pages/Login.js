import React, { useState, useContext } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../helpers/AuthContext';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { setAuthState } = useContext(AuthContext);

  let history = useHistory();

  const login = () => {
    const data = { username: username, password: password };
    axios.post('http://localhost:3001/auth/login', data).then(response => {
      if (response.data.error) {
        alert(response.data.error);
      } else {
        localStorage.setItem('accessToken', response.data);
        setAuthState(true);
        history.push('/');
      }
    });
  };
  return (
    <div className="loginContainer">
      <label>아이디</label>
      <input
        type="text"
        onChange={event => {
          setUsername(event.target.value);
        }}
      />
      <label>비밀번호</label>
      <input
        type="password"
        onChange={event => {
          setPassword(event.target.value);
        }}
      />

      <button onClick={login}> 로그인 </button>
    </div>
  );
}

export default Login;
