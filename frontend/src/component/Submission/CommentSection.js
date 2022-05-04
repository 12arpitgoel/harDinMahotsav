import React from 'react'
import Comments from './Comments';
import './Comments.css'

function CommentSection() {
    const [comments, setComments] = React.useState("");
    const [commentsArr, setCommentsArr] = React.useState([]);
    
    const updateComment = (newtext,idx) =>{
        let arr = commentsArr;
        var newText = newtext;
        arr[idx] = newText;
        setCommentsArr(arr);
      }
      
    const removeComment = (idx)=>{
        let arr = commentsArr;
        arr.splice(idx,1)
        setCommentsArr(arr);
      }  
    
    function addNewComment(e){
        let newText = comments;
        if(newText !== ""){
          let arr = commentsArr;
          arr.push(newText);
          setCommentsArr(arr);
        }
        else alert("Please write a comment to share!")
        
      }
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setComments(value);
      }; 
      
      function displayComments(text, i) {
        return (
            <Comments
                key={i}
                index={i}
                removeCommentFromBoard={removeComment}
                updateCommentFromBoard={updateComment}
                text={text}
            ></Comments>
            
        );
    }
      
    return (
        <div className="board">
            {commentsArr.map((text,index)=>displayComments(text,index))}
            <div className="shareCommentContainer">
      
                <textarea id="shareCommentText" onChange={e => handleInputChange(e)} value={comments}  placeholder="Write a comment.."></textarea>
                <button onClick={(e)=>addNewComment(e)} className="btn btn-success"> Share</button>
            </div>

            
        </div>
    );
}


export default CommentSection