import { useSelector } from "react-redux";
import "./style.css"

const Display = () => {

  const comments = useSelector((store) => store.user)

  return (

    <div className="Display">
      <div>
        <h1>{comments.name}</h1>
      </div>
      <ul>
        {comments.comments.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>

  )
}

export default Display;