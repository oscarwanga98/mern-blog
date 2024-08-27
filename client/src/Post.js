import {formatISO9075} from "date-fns";
import {Link} from "react-router-dom";


export default function Post({_id,title,summary,cover,content,createdAt,author}) {
  const apiUrl = "https://mern-blog-backendapi.onrender.com";

  return (
    <div className="post">
      <div className="image">
        <Link to={`/post/${_id}`}>
          {/* <img src={`${apiUrl}/${cover}`} alt="" /> */}
        </Link>
      </div>
      <div className="texts">
        <Link to={`/post/${_id}`}>
          <h2>{title}</h2>
        </Link>
        <p className="info">
          <h1 className="author">{author.username}</h1>
          <time>{formatISO9075(new Date(createdAt))}</time>
        </p>
        <p className="summary">{summary}</p>
      </div>
    </div>
  );
}