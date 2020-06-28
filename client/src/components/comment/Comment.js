import React from 'react'
import ADDComment from "./addComment"
import GETComments from "./getComments"


const Comment = () => {
    return (
        <div className="d-flex flex-column" >
            <ADDComment />
            <GETComments />
        </div>
    )
}

export default Comment
