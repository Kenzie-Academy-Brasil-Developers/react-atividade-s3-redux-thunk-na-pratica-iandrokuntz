import { useDispatch } from "react-redux";
import { addCommentThunk } from "../../store/modules/user/thunks";
import { useState } from "react";

const InputComment = () => {
    
  const dispatch = useDispatch()

  const [newComment, setNewComment] = useState("")

  const handleClick = () => {

    dispatch(addCommentThunk(newComment))
    setNewComment("")
  }

  return (
    <div>

      <input type="text" placeholder="New Comment" value={newComment} onChange={(e) => setNewComment(e.target.value)}/>
      <button onClick={handleClick}>Add Comment</button>

    </div>
  );
};

export default InputComment;