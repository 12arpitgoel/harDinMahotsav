import React, { useEffect } from 'react';
import './Comments.css';

function Comments(props) {
    const [ edit, setEdit] = React.useState(false);
    const [ updatedComment , setUpdatedComment] = React.useState(props.text);
    const editing = () =>{
       setEdit(true);
    }
      
    const save= () =>{
        props.updateCommentFromBoard(updatedComment,props.index);
        setEdit(false);
    }
      
    const remove= () =>{
       props.removeCommentFromBoard(props.index);  
    }
    const handleChange=(e)=>{
        const { name, value } = e.target;
        setUpdatedComment(value);
    }
  return (
    <>

    {edit == false?
    <>
    <div className="commentContainer">
        <div className="commentText">{props.text}</div>       
       <button onClick={editing} className="btn btn-comment">
          <span className="fa fa-pencil fa-2x"></span>
         </button>
        <button onClick={remove} className="btn btn-comment">
          <span className="fa fa-trash fa-2x"></span>
         </button>
      </div>
    </>

    :
    <>
    <div className="commentContainer">
        <div className="commentText">
          <textarea 
            onChange={(e)=>handleChange(e)}        
            value={updatedComment}> 
          </textarea>
        </div>
                      
       <button onClick={save} className="btn-comment">
          <span className="fa fa-floppy-o fa-2x"></span>
         </button>
      </div>
    </>
     }

    </>
  )
}

export default Comments