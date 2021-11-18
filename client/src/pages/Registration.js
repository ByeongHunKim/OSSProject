import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

function Registration() {
  let history = useHistory();

  const initialValues = {
    username: '',
    password: '',
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().min(3).max(15).required('이름을 입력해야만 합니다.'),
    password: Yup.string().min(4).max(20).required('이름을 입력해야만 합니다.'),
  });

  const onSubmit = data => {
    axios.post('http://localhost:3001/auth', data).then(() => {
      console.log(data);
      history.push('/');
    });
  };

  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
        <Form className="formContainer">
          <label>아이디: </label>
          <ErrorMessage name="username" component="span" />
          <Field
            autoComplete="off"
            id="inputCreatePost"
            name="username"
            placeholder="사용하실 아이디를 입력하세요"
          />
          <label>비밀번호: </label>
          <ErrorMessage name="username" component="span" />
          <Field
            autoComplete="off"
            type="password"
            id="inputCreatePost"
            name="password"
            placeholder="4~15글자 입력하세요"
          />
          <button type="summit">회원가입</button>
        </Form>
      </Formik>
    </div>
  );
}

export default Registration;
