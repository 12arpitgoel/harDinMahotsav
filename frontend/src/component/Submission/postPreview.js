import React, { useEffect, useState } from 'react'
import { Modal } from 'react-bootstrap'
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
// import './postPreview.css'
import { MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import SendIcon from '@mui/icons-material/Send';
import CardHeader from '@mui/material/CardHeader';
import { useAlert } from "react-alert";
import Avatar from '@mui/material/Avatar';
import { red } from '@mui/material/colors';

import Disscuss from './Disscuss';
import axios from 'axios';

function PostPreview({isOpened,onCloseModal,submission,user}) {
    
    const [comment,setComment]=useState("");
    const [replyingTo,setReplyingTo]=useState();
    const [comments,setComments]=useState([]);
    const alert =useAlert();
    const fetchComments=async()=>{
        try {
            const res = await axios.get(`/api/v1/competition/submission/${submission._id}/comments`);
            
            if(res.data.success)
                setComments(res.data.comments);
        } catch (err) {
            alert.error(err.response.data.msg);
        }
    }

    useEffect(()=>{
        fetchComments();
    },[])
    

    const createComment=async()=>{
        try {
            let postId=null;
            let repliedTo=null;
            if(replyingTo){
                if(replyingTo.postId){
                    postId=replyingTo.postId;
                    repliedTo=replyingTo.user?.name;
                }
                else{
                    postId=replyingTo._id
                }
            }
            const formData = new FormData();
            formData.set("comment", comment);
            postId && formData.set("postId", postId);
            repliedTo && formData.set('repliedTo', repliedTo);
            formData.set('submissionId', submission._id);
            
            const config = { headers: { "Content-Type": "application/json" } };
            const res = await axios.post(`/api/v1/competition/submission/createComment`,formData,config);
            
            if(res.data.success){
                fetchComments();
                setComment("");
                setReplyingTo(null);
            }
                
        } catch (err) {
            alert.error(err?.response?.data?.message);
        }
    }

    return (
        <>
            <Modal
                size="lg"
                // fullscreen={true}
                show={isOpened}
                onHide={() => onCloseModal()}
                aria-labelledby="example-modal-sizes-title-lg"
                dialogClassName="my-modal"
            >
                <Modal.Header closeButton>
                    <Card sx={{ width: 1000, minWidth: 50 }}>
                        <CardHeader
                            avatar={
                                <Avatar sx={{ bgcolor: red[500] }} src={submission.user?.avatar?.url} aria-label="recipe">
                                </Avatar>
                            }
                            title={submission.name}
                            subheader={submission.createdAt?.split("T")[0]}
                        />
                    </Card>
                </Modal.Header>
                <Modal.Body>
                    <MDBCard style={{ maxWidth: '100%' }}>
                        <MDBRow className='g-0'>
                            <MDBCol style={{ display: 'flex', flexDirection: 'column', justifyContent: "space-around" }} md='6'>
                                <MDBCardImage src={submission.media?.url} alt='...' fluid />
                                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: "space-evenly" }}>
                                    <Avatar sx={{ bgcolor: red[500] }} src={user.avatar?.url}aria-label="recipe">
                                       
                                    </Avatar>
                                    <textarea placeholder='Write your Comment' value={comment} onChange={(e)=>setComment(e.target.value)}></textarea>
                                    <Button variant="contained" endIcon={<SendIcon />} onClick={()=>createComment()}>
                                        Send
                                    </Button>
                                </div>
                                {
                                    replyingTo && (
                                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: "space-between",backgroundColor:"pink" ,padding:"2px 10px"}}>
                                            <div style={{color:'blue'}}>
                                                <b>@ {replyingTo.user?.name}</b>
                                            </div>
                                            <button onClick={()=>setReplyingTo(null)}>X</button>
                                        </div>
                                    )
                                }
                                
                            </MDBCol>
                            <MDBCol md="1"></MDBCol>
                            <MDBCol md='5'>
                                <MDBCardBody>
                                    {/* <CommentSection/> */}
                                    <div style={{ height: '300px', overflowY: "scroll" }}>
                                        <Disscuss setReplyingTo={setReplyingTo} submissionId={submission._id} comments={comments}/>

                                    </div>

                                </MDBCardBody>
                            </MDBCol>
                        </MDBRow>
                    </MDBCard>
                </Modal.Body>
            </Modal>
        </>

    )
}




export default PostPreview