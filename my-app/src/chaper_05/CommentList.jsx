import React from "react";
import Comment from "./Comment";

const comments = [
  {
    name:"이인제",
    comment: "안녕하세요.",
  },
  {
    name:"유재석",
    comment: "어렵다 리엑트.",
  },
  {
    name:"jiness",
    comment: "vue나 할까.",
  },
]

function CommentList(props){
  return (
    <div>
      {comments.map((comment) => {
        return (
          <Comment name={comment.name} comment={comment.comment} />
        )
      })}
    </div>
  )
}

export default CommentList;