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
    // <>

    // {edit == false?
    // <>
    // <div className="commentContainer">
    //     <div className="commentText">{props.text}</div>       
    //    <button onClick={editing} className="btn btn-comment">
    //       <span className="fa fa-pencil fa-2x"></span>
    //      </button>
    //     <button onClick={remove} className="btn btn-comment">
    //       <span className="fa fa-trash fa-2x"></span>
    //      </button>
    //   </div>
    // </>

    // :
    // <>
    // <div className="commentContainer">
    //     <div className="commentText">
    //       <textarea 
    //         onChange={(e)=>handleChange(e)}        
    //         value={updatedComment}> 
    //       </textarea>
    //     </div>
                      
    //    <button onClick={save} className="btn-comment">
    //       <span className="fa fa-floppy-o fa-2x"></span>
    //      </button>
    //   </div>
    // </>
    //  }

    // </>
    <>
    <div class="container py-4">
   <div class="col-md-10 col-lg-8 m-auto">
      <div class="bg-white rounded-3 shadow-sm p-4 mb-4">
         {/* <!-- New Comment //--> */}
         <div class="d-flex">
            <img class="rounded-circle me-3"
                 style="width:3rem;height:3rem;"
                 src="https://via.placeholder.com/128/fe669e/ffcbde.png?text=S" />
            <div class="flex-grow-1">
               <div class="hstack gap-2 mb-1">
                  <a href="#" class="fw-bold link-dark">Studio KonKon</a>
               </div>
               <div class="form-floating mb-3">
                  <textarea class="form-control w-100"
                            placeholder="Leave a comment here"
                            id="my-comment"
                            style="height:7rem;"></textarea>
                  <label for="my-comment">Leave a comment here</label>
               </div>
               <div class="hstack justify-content-end gap-2">
                  <button class="btn btn-sm btn-link link-secondary text-uppercase">cancel</button>
                  <button class="btn btn-sm btn-primary text-uppercase">comment</button>
               </div>
            </div>
         </div>
      </div>
      <div class="bg-white rounded-3 shadow-sm p-4">

         <h4 class="mb-4">7 Comments</h4>

         {/* <!-- Comment #1 //--> */}
         <div class="">
            <div class="py-3">
               <div class="d-flex comment">
                  <img class="rounded-circle comment-img"
                       src="https://via.placeholder.com/128/fe669e/ffcbde.png?text=S" />
                  <div class="flex-grow-1 ms-3">
                     <div class="mb-1"><a href="#" class="fw-bold link-dark me-1">Studio KonKon</a> <span class="text-muted text-nowrap">2 days ago</span></div>
                     <div class="mb-2">Lorem ipsum dolor sit amet, ut qui commodo sensibus, id utinam inermis constituto vim. In nam dolorum interesset, per fierent ponderum ea. Eos aperiri feugiat democritum ne.</div>
                     <div class="hstack align-items-center mb-2">
                        <a class="link-primary me-2" href="#"><i class="zmdi zmdi-thumb-up"></i></a>
                        <span class="me-3 small">55</span>
                        <a class="link-secondary me-4" href="#"><i class="zmdi zmdi-thumb-down"></i></a>
                        <a class="link-secondary small" href="#">REPLY</a>
                        <a class="link-danger small ms-3" href="#">DELETE</a>
                     </div>
                     <a class="fw-bold d-flex align-items-center" href="#">
                        <i class="zmdi zmdi-chevron-down fs-4 me-3"></i>
                        <span>Hide Replies</span>
                     </a>
                  </div>
               </div>
               <div class="comment-replies mt-4 bg-light p-3 rounded">
                  <div class="d-flex py-2">
                     <img class="rounded-circle comment-img"
                          src="https://via.placeholder.com/128/cc99ff/7f00ff.png?text=S" />
                     <div class="flex-grow-1 ms-3">
                        <div class="mb-1"><a href="#" class="fw-bold link-dark pe-1">Shinobu KonKon</a> <span class="text-muted text-nowrap">1 day ago</span></div>
                        <div class="mb-2">Disputando voluptatibus ei sit. Et veri deserunt theophrastus pri, at mutat choro eum.</div>
                        <div class="hstack align-items-center">
                           <a class="link-secondary me-2" href="#"><i class="zmdi zmdi-thumb-up"></i></a>
                           <span class="me-3 small">1</span>
                           <a class="link-secondary me-4" href="#"><i class="zmdi zmdi-thumb-down"></i></a>
                           <a class="link-secondary small" href="#">REPLY</a>
                        </div>
                     </div>
                  </div>
                  <div class="d-flex py-2">
                     <img class="rounded-circle comment-img"
                          src="https://via.placeholder.com/128/ffcc99/ff8000.png?text=O" />
                     <div class="flex-grow-1 ms-3">
                        <div class="mb-1"><a href="#" class="fw-bold link-dark pe-1">Oomiya Yuki</a> <span class="text-muted text-nowrap">1 minute ago</span></div>
                        <div class="mb-2">Munere consetetur an usu, vis quot maiestatis concludaturque at. Ne etiam indoctum referrentur eum, vix legimus nominati eu. Epicurei quaestio sea ut, munere deserunt adipiscing qui te.</div>
                        <div class="hstack align-items-center">
                           <a class="link-secondary me-2" href="#"><i class="zmdi zmdi-thumb-up"></i></a>
                           <span class="me-3 small"></span>
                           <a class="link-primary me-4" href="#"><i class="zmdi zmdi-thumb-down"></i></a>
                           <a class="link-secondary small" href="#">REPLY</a>
                        </div>
                     </div>
                  </div>
                  <div class="d-flex py-2">
                     <img class="rounded-circle comment-img"
                          src="https://via.placeholder.com/128/ff99cc/fe669e.png?text=K" />
                     <div class="flex-grow-1 ms-3">
                        <div class="mb-1"><a href="#" class="fw-bold link-light bg-primary py-1 px-2 rounded-pill me-1">Kamisato Mugi</a> <span class="text-muted text-nowrap">just now</span></div>
                        <div class="mb-2"><a href="#">@Shinobu_KonKon</a> Vivamus ac varius augue. Curabitur luctus convallis lorem, vitae convallis dui volutpat nec.</div>
                        <div class="hstack align-items-center">
                           <a class="link-secondary me-2" href="#"><i class="zmdi zmdi-thumb-up"></i></a>
                           <span class="me-3 small">2</span>
                           <a class="link-secondary me-4" href="#"><i class="zmdi zmdi-thumb-down"></i></a>
                           <a class="link-secondary small" href="#">REPLY</a>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            {/* <!-- Comment #2 //--> */}
            <div class="py-3">
               <div class="d-flex comment">
                  <img class="rounded-circle comment-img"
                       src="https://via.placeholder.com/128/99ccff/0073e6.png?text=A" />
                  <div class="flex-grow-1 ms-3">
                     <div class="mb-1"><a href="#" class="fw-bold link-dark pe-1">Asai Kazuma</a> <span class="text-muted text-nowrap">8 hours ago</span></div>
                     <div class="mb-2">Ei saepe abhorreant temporibus cum, hinc praesent voluptatum ea has.<br /><br />Vis nihil tacimates senserit ut, quo posse labores honestatis te. Ex duo nullam posidonium deterruisset, altera aeterno duo.</div>
                     <div class="hstack align-items-center">
                        <a class="link-secondary me-2" href="#"><i class="zmdi zmdi-thumb-up"></i></a>
                        <span class="me-3 small">26</span>
                        <a class="link-secondary me-4" href="#"><i class="zmdi zmdi-thumb-down"></i></a>
                        <a class="link-secondary small" href="#">REPLY</a>
                     </div>
                  </div>
               </div>
            </div>

            {/* <!-- Comment #3 //--> */}
            <div class="py-3">
               <div class="d-flex comment">
                  <img class="rounded-circle comment-img"
                       src="https://via.placeholder.com/128/ff99cc/fe669e.png?text=K" />
                  <div class="flex-grow-1 ms-3">
                     <div class="mb-1"><a href="#" class="fw-bold link-light bg-primary py-1 px-2 rounded-pill me-1">Kamisato Mugi</a> <span class="text-muted text-nowrap">10 hours ago</span></div>
                     <div class="mb-2">Aenean non tellus sed erat ultrices rutrum. Sed ac dolor tempus, efficitur diam vitae, sagittis nisi. Morbi bibendum congue nisl eu congue. Mauris eu eros bibendum, pretium ex ac, aliquam lorem.</div>
                     <div class="hstack align-items-center mb-2">
                        <a class="link-primary me-2" href="#"><i class="zmdi zmdi-thumb-up"></i></a>
                        <span class="me-3 small">8</span>
                        <a class="link-secondary me-4" href="#"><i class="zmdi zmdi-thumb-down"></i></a>
                        <a class="link-secondary small" href="#">REPLY</a>
                     </div>
                     <a class="fw-bold d-flex align-items-center" href="#">
                        <i class="zmdi zmdi-chevron-down fs-4 me-3"></i>
                        <span>Hide Replies</span>
                     </a>
                  </div>
               </div>
               <div class="comment-replies mt-4 bg-light p-3 rounded">
                  <div class="d-flex py-2">
                     <img class="rounded-circle comment-img"
                          src="https://via.placeholder.com/128/fe669e/ffcbde.png?text=S" />
                     <div class="flex-grow-1 ms-3">
                        <div class="mb-1">
                           <div><a href="#" class="fw-bold link-dark">Studio KonKon</a></div>
                           <div class="text-muted small">Replying to @Kamisato_Mugi</div>
                        </div>
                        <div class="form-floating mb-2">
                           <textarea class="form-control w-100"
                                     placeholder="Leave a comment here"
                                     id="my-comment-reply"
                                     style="height:7rem;"></textarea>
                           <label for="my-comment-reply">Leave a comment here</label>
                        </div>
                        <div class="hstack justify-content-end gap-2">
                           <button class="btn btn-sm btn-link link-secondary text-uppercase">cancel</button>
                           <button class="btn btn-sm btn-primary text-uppercase">comment</button>
                        </div>
                     </div>
                  </div>
                  <div class="d-flex py-2">
                     <img class="rounded-circle comment-img"
                          src="https://via.placeholder.com/128/ffcc99/ff8000.png?text=O" />
                     <div class="flex-grow-1 ms-3">
                        <div class="mb-1"><a href="#" class="fw-bold link-dark pe-1">Oomiya Yuki</a> <span class="text-muted text-nowrap">5 mintues ago</span></div>
                        <div class="mb-2">Integer et lorem lacus. Aenean bibendum ex sem, at pretium metus mollis sit amet. Morbi quis egestas ante. Praesent diam odio, fermentum non sapien vitae, fringilla placerat diam.</div>
                        <div class="hstack align-items-center">
                           <a class="link-secondary me-2" href="#"><i class="zmdi zmdi-thumb-up"></i></a>
                           <span class="me-3 small"></span>
                           <a class="link-secondary me-4" href="#"><i class="zmdi zmdi-thumb-down"></i></a>
                           <a class="link-secondary small" href="#">REPLY</a>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>

      </div>
   </div>
</div>

    </>
  )
}

export default Comments