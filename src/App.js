import "./App.css";
import { Route, NavLink, Switch } from "react-router-dom";
import Home from "./screens/Home";
import Posts from "./screens/Posts";
import About from "./screens/About.js";
import Post from "./screens/Post";
import data from "./FakeData.json";
import NoMatch from "./screens/NoMatch";

function App() {
  return (
    <div className="App">
      <div className="app-links">
        <nav className="app-nav">
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/about"}>About</NavLink>
          <NavLink to={"/posts"}>Posts</NavLink>
        </nav>
      </div>

      <main className="app-main">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/posts">
            <Posts posts={data} />
          </Route>
          <Route path="/posts/:post_id">
            <Post />
          </Route>
          <Route path={"*"} component={NoMatch}>
            <Post {...data} />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
