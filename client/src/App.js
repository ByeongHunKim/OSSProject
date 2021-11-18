import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from './pages/Home';
import CreatePost from './pages/CreatePost';
import Post from './pages/Post';
import Login from './pages/Login';
import Registration from './pages/Registration';

function App() {
  return (
    <div className="App">
      <Router>
        <div className="navbar">
          <Link to="/">홈</Link>
          <Link to="/createpost">새 글 작성</Link>
          <Link to="/login">로그인</Link>
          <Link to="/registration">회원가입</Link>
        </div>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/createpost" exact component={CreatePost} />
          <Route path="/post/:id" exact component={Post} />
          <Route path="/login" exact component={Login} />
          <Route path="/registration" exact component={Registration} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
