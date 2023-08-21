import { useSelector } from "react-redux/es/hooks/useSelector";
import { selectallUsers } from "../users/userSlice";
import React from 'react'

const PostAuthor = ({userId}) => {
    const users= useSelector(selectallUsers)

    const author = users.find(user  => user.id === userId)

  return (
    <>
          <div className="container-fluid">

            <div>{author? author.name : 'Unknown author'}</div>
          </div>
    </>
    
  )
}

export default PostAuthor