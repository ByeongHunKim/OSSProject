import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

function CreatePost() {
  const initialvalues = {
    title: '',
    postText: '',
    username: '',
  };

  const validationSchema = Yup.object().shape({
    title: Yup.string().required('제목을 입력하세요'),
    postText: Yup.string().required('내용을 입력하세요'),
    username: Yup.string().min(3).max(15).required('사용자 이름을 입력하세요'),
  });

  const onSubmit = data => {
    axios.post('http://localhost:3001/posts', data).then(response => {
      console.log('it worked');
    });
  };
  return (
    <div className="createpostPage">
      <Formik initialValues={initialvalues} onSubmit={onSubmit} validationSchema={validationSchema}>
        <Form className="formContainer">
          <label>Title:</label>
          <ErrorMessage name="title" component="span" />
          <Field autocomplete="off" id="inputCreatePost" name="title" placeholder="(Ex. Title..)" />
          <label>Post:</label>
          <ErrorMessage name="postText" component="span" />
          <Field
            autocomplete="off"
            id="inputCreatePost"
            name="postText"
            placeholder="(Ex. Post...)"
          />
          <label>Username:</label>
          <ErrorMessage name="username" component="span" />
          <Field
            autocomplete="off"
            id="inputCreatePost"
            name="username"
            placeholder="(Ex. 홍길동...)"
          />
          <button type="summit">Create Post</button>
        </Form>
      </Formik>
    </div>
  );
}

export default CreatePost;
