// react-router-domのインポートを追加
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";

import { Post } from "./frontend/pages/post";
import { Login } from "./frontend/pages/login";
import { Mypost } from "./frontend/pages/mypost";
import { Posts } from "./frontend/pages/posts";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Link to="/post">Post</Link>
        <br />
        <Link to="/login">Login</Link>
        <br />
        <Link to="/mypost">My Post</Link>
        <br />
        <Link to="/posts">Posts</Link>
        <br />

        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/post" element={<Post />} />
          <Route path="/mypost" element={<Mypost />} />
          <Route path="/posts" element={<Posts />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;