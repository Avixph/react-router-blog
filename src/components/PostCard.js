import { useHistory } from "react-router-dom";

function PostCard() {
  const history = useHistory();
  return (
    <div className="item" key={props.id}>
      <img src={props.image} alt="Post banner" />
      <div className="modal">
        <h3>{props.title}</h3>
        <button onClick={() => props.history.push(`/posts/${props.id}`)}>
          Read More
        </button>
      </div>
    </div>
  );
}
export default PostCard;
