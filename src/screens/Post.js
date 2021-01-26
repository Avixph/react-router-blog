import data from "../FakeData.json";
import { useParams } from "react-router-dom";

export function Post(props) {
  console.log(props);

  const {
    match: {
      params: { post_id },
    },
  } = props;

  const { post_id } = useParams();

  const postNum = parseInt(post_id) - 1;
  const post = props[postNum];

  return (
    <div className="post">
      <div className="hero">
        <img src={post.image} alt="post banner" />
      </div>
      <div className="content">
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    </div>
  );
}

export default Post;
