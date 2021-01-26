import data from "../FakeData.json";
import { useState, useEffect } from "react";
import PostCard from "../components/PostCard";

function Posts(props) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setPosts({ data });
  }, []);

  const renderPosts = () => {
    const { history } = props;
    return posts.map((posts) => {
      <PostCard
        key={posts.id}
        id={posts.id}
        title={posts.title}
        image={posts.image}
        history={history}
      />;
    });
  };
  return <div className="posts">{renderPosts()}</div>;
}

export default Posts;
