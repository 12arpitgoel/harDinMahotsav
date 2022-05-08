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
       
        <>
        <div className="container py-4 Section">
       <div className="col-md-10 col-lg-8 m-auto">
          <div className="bg-white rounded-3 shadow-sm p-4 mb-4">
             {/* <!-- New Comment //--> */}
             <div classNameName="d-flex">
                <img className="rounded-circle me-3"
                     style={{width:'3rem',height:'3rem'}}
                     src="https://via.placeholder.com/128/fe669e/ffcbde.png?text=S" />
                <div className="flex-grow-1">
                   <div className="hstack gap-2 mb-1">
                      <a href="#" className="fw-bold link-dark">Studio KonKon</a>
                   </div>
                   <div className="form-floating mb-3">
                      <textarea className="form-control w-100"
                                placeholder="Leave a comment here"
                                id="my-comment"
                                style={{height:'7rem'}}></textarea>
                      <label for="my-comment">Leave a comment here</label>
                   </div>
                   <div className="hstack justify-content-end gap-2">
                      <button className="btn btn-sm btn-link link-secondary text-uppercase">cancel</button>
                      <button className="btn btn-sm btn-primary text-uppercase">comment</button>
                   </div>
                </div>
             </div>
          </div>
          <div className="bg-white rounded-3 shadow-sm p-4">
    
             <h4 className="mb-4">7 Comments</h4>
    
             {/* <!-- Comment #1 //--> */}
             <div className="">
                <div className="py-3">
                   <div className="d-flex comment">
                      <img className="rounded-circle comment-img"
                           src="https://via.placeholder.com/128/fe669e/ffcbde.png?text=S" />
                      <div className="flex-grow-1 ms-3">
                         <div className="mb-1"><a href="#" className="fw-bold link-dark me-1">Studio KonKon</a> <span className="text-muted text-nowrap">2 days ago</span></div>
                         <div className="mb-2">Lorem ipsum dolor sit amet, ut qui commodo sensibus, id utinam inermis constituto vim. In nam dolorum interesset, per fierent ponderum ea. Eos aperiri feugiat democritum ne.</div>
                         <div className="hstack align-items-center mb-2">
                            <a className="link-primary me-2" href="#"><i className="zmdi zmdi-thumb-up"></i></a>
                            <span className="me-3 small">55</span>
                            <a className="link-secondary me-4" href="#"><i className="zmdi zmdi-thumb-down"></i></a>
                            <a className="link-secondary small" href="#">REPLY</a>
                            <a className="link-danger small ms-3" href="#">DELETE</a>
                         </div>
                         <a className="fw-bold d-flex align-items-center" href="#">
                            <i className="zmdi zmdi-chevron-down fs-4 me-3"></i>
                            <span>Hide Replies</span>
                         </a>
                      </div>
                   </div>
                   <div className="comment-replies mt-4 bg-light p-3 rounded">
                      <div className="d-flex py-2">
                         <img className="rounded-circle comment-img"
                              src="https://via.placeholder.com/128/cc99ff/7f00ff.png?text=S" />
                         <div className="flex-grow-1 ms-3">
                            <div className="mb-1"><a href="#" className="fw-bold link-dark pe-1">Shinobu KonKon</a> <span className="text-muted text-nowrap">1 day ago</span></div>
                            <div className="mb-2">Disputando voluptatibus ei sit. Et veri deserunt theophrastus pri, at mutat choro eum.</div>
                            <div className="hstack align-items-center">
                               <a className="link-secondary me-2" href="#"><i className="zmdi zmdi-thumb-up"></i></a>
                               <span className="me-3 small">1</span>
                               <a className="link-secondary me-4" href="#"><i className="zmdi zmdi-thumb-down"></i></a>
                               <a className="link-secondary small" href="#">REPLY</a>
                            </div>
                         </div>
                      </div>
                      <div className="d-flex py-2">
                         <img className="rounded-circle comment-img"
                              src="https://via.placeholder.com/128/ffcc99/ff8000.png?text=O" />
                         <div className="flex-grow-1 ms-3">
                            <div className="mb-1"><a href="#" className="fw-bold link-dark pe-1">Oomiya Yuki</a> <span className="text-muted text-nowrap">1 minute ago</span></div>
                            <div className="mb-2">Munere consetetur an usu, vis quot maiestatis concludaturque at. Ne etiam indoctum referrentur eum, vix legimus nominati eu. Epicurei quaestio sea ut, munere deserunt adipiscing qui te.</div>
                            <div className="hstack align-items-center">
                               <a className="link-secondary me-2" href="#"><i className="zmdi zmdi-thumb-up"></i></a>
                               <span className="me-3 small"></span>
                               <a className="link-primary me-4" href="#"><i className="zmdi zmdi-thumb-down"></i></a>
                               <a className="link-secondary small" href="#">REPLY</a>
                            </div>
                         </div>
                      </div>
                      <div className="d-flex py-2">
                         <img className="rounded-circle comment-img"
                              src="https://via.placeholder.com/128/ff99cc/fe669e.png?text=K" />
                         <div className="flex-grow-1 ms-3">
                            <div className="mb-1"><a href="#" className="fw-bold link-light bg-primary py-1 px-2 rounded-pill me-1">Kamisato Mugi</a> <span className="text-muted text-nowrap">just now</span></div>
                            <div className="mb-2"><a href="#">@Shinobu_KonKon</a> Vivamus ac varius augue. Curabitur luctus convallis lorem, vitae convallis dui volutpat nec.</div>
                            <div className="hstack align-items-center">
                               <a className="link-secondary me-2" href="#"><i className="zmdi zmdi-thumb-up"></i></a>
                               <span className="me-3 small">2</span>
                               <a className="link-secondary me-4" href="#"><i className="zmdi zmdi-thumb-down"></i></a>
                               <a className="link-secondary small" href="#">REPLY</a>
                            </div>
                         </div>
                      </div>
                   </div>
                </div>
    
                {/* <!-- Comment #2 //--> */}
                {/* <div className="py-3">
                   <div className="d-flex comment">
                      <img className="rounded-circle comment-img"
                           src="https://via.placeholder.com/128/99ccff/0073e6.png?text=A" />
                      <div className="flex-grow-1 ms-3">
                         <div className="mb-1"><a href="#" className="fw-bold link-dark pe-1">Asai Kazuma</a> <span className="text-muted text-nowrap">8 hours ago</span></div>
                         <div className="mb-2">Ei saepe abhorreant temporibus cum, hinc praesent voluptatum ea has.<br /><br />Vis nihil tacimates senserit ut, quo posse labores honestatis te. Ex duo nullam posidonium deterruisset, altera aeterno duo.</div>
                         <div className="hstack align-items-center">
                            <a className="link-secondary me-2" href="#"><i className="zmdi zmdi-thumb-up"></i></a>
                            <span className="me-3 small">26</span>
                            <a className="link-secondary me-4" href="#"><i className="zmdi zmdi-thumb-down"></i></a>
                            <a className="link-secondary small" href="#">REPLY</a>
                         </div>
                      </div>
                   </div>
                </div>
    
                {/* <!-- Comment #3 //--> */}
                {/* <div className="py-3">
                   <div className="d-flex comment">
                      <img className="rounded-circle comment-img"
                           src="https://via.placeholder.com/128/ff99cc/fe669e.png?text=K" />
                      <div className="flex-grow-1 ms-3">
                         <div className="mb-1"><a href="#" className="fw-bold link-light bg-primary py-1 px-2 rounded-pill me-1">Kamisato Mugi</a> <span className="text-muted text-nowrap">10 hours ago</span></div>
                         <div className="mb-2">Aenean non tellus sed erat ultrices rutrum. Sed ac dolor tempus, efficitur diam vitae, sagittis nisi. Morbi bibendum congue nisl eu congue. Mauris eu eros bibendum, pretium ex ac, aliquam lorem.</div>
                         <div className="hstack align-items-center mb-2">
                            <a className="link-primary me-2" href="#"><i className="zmdi zmdi-thumb-up"></i></a>
                            <span className="me-3 small">8</span>
                            <a className="link-secondary me-4" href="#"><i className="zmdi zmdi-thumb-down"></i></a>
                            <a className="link-secondary small" href="#">REPLY</a>
                         </div>
                         <a className="fw-bold d-flex align-items-center" href="#">
                            <i className="zmdi zmdi-chevron-down fs-4 me-3"></i>
                            <span>Hide Replies</span>
                         </a>
                      </div>
                   </div>
                   <div className="comment-replies mt-4 bg-light p-3 rounded">
                      <div className="d-flex py-2">
                         <img className="rounded-circle comment-img"
                              src="https://via.placeholder.com/128/fe669e/ffcbde.png?text=S" />
                         <div className="flex-grow-1 ms-3">
                            <div className="mb-1">
                               <div><a href="#" className="fw-bold link-dark">Studio KonKon</a></div>
                               <div className="text-muted small">Replying to @Kamisato_Mugi</div>
                            </div>
                            <div className="form-floating mb-2">
                               <textarea className="form-control w-100"
                                         placeholder="Leave a comment here"
                                         id="my-comment-reply"
                                         style="height:7rem;"></textarea>
                               <label for="my-comment-reply">Leave a comment here</label>
                            </div>
                            <div className="hstack justify-content-end gap-2">
                               <button className="btn btn-sm btn-link link-secondary text-uppercase">cancel</button>
                               <button className="btn btn-sm btn-primary text-uppercase">comment</button>
                            </div>
                         </div>
                      </div>
                      <div className="d-flex py-2">
                         <img className="rounded-circle comment-img"
                              src="https://via.placeholder.com/128/ffcc99/ff8000.png?text=O" />
                         <div className="flex-grow-1 ms-3">
                            <div className="mb-1"><a href="#" className="fw-bold link-dark pe-1">Oomiya Yuki</a> <span className="text-muted text-nowrap">5 mintues ago</span></div>
                            <div className="mb-2">Integer et lorem lacus. Aenean bibendum ex sem, at pretium metus mollis sit amet. Morbi quis egestas ante. Praesent diam odio, fermentum non sapien vitae, fringilla placerat diam.</div>
                            <div className="hstack align-items-center">
                               <a className="link-secondary me-2" href="#"><i className="zmdi zmdi-thumb-up"></i></a>
                               <span className="me-3 small"></span>
                               <a className="link-secondary me-4" href="#"><i className="zmdi zmdi-thumb-down"></i></a>
                               <a className="link-secondary small" href="#">REPLY</a>
                            </div>
                         </div>
                      </div>
                   </div>
                </div> */} 
             </div>
    
          </div>
       </div>
    </div>
    
        </>
    );
}


export default CommentSection