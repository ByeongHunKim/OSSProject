import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

function CreatePost() {
  let history = useHistory();

  const initialValues = {
    title: '',
    postText: '',
    username: '',
  };

  const validationSchema = Yup.object().shape({
    title: Yup.string().required('제목을 입력해야만 합니다'),
    postText: Yup.string().required('내용을 입력해야만 합니다.'),
    username: Yup.string().min(3).max(15).required('이름을 입력해야만 합니다.'),
  });

  const onSubmit = data => {
    // console.log(data);
    axios.post('http://localhost:3001/posts', data).then(response => {
      history.push('/');
    });
  };

  return (
    <div className="createPostPage">
      <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
        <Form className="formContainer">
          <label>제목: </label>
          <ErrorMessage name="title" component="span" />
          <Field autoComplete="off" id="inputCreatePost" name="title" placeholder="(Ex. 제목..)" />
          <label>내용: </label>
          <ErrorMessage name="postText" component="span" />
          <Field
            autoComplete="off"
            id="inputCreatePost"
            name="postText"
            placeholder="(Ex. 게시글..)"
          />
          <label>닉네임: </label>
          <ErrorMessage name="username" component="span" />
          <Field
            autoComplete="off"
            id="inputCreatePost"
            name="username"
            placeholder="(Ex. 홍길동..)"
          />
          <button type="summit">작성하기</button>
        </Form>
      </Formik>
    </div>
  );
}

export default CreatePost;
