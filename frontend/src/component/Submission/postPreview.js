import React, { useEffect, useState } from 'react'
import { Modal } from 'react-bootstrap'
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
// import './postPreview.css'
import { MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import SendIcon from '@mui/icons-material/Send';
import CardHeader from '@mui/material/CardHeader';

import Avatar from '@mui/material/Avatar';
import { red } from '@mui/material/colors';

import Disscuss from './Disscuss';

function PostPreview({isOpened,onCloseModal,submission,user}) {
    
    const [comment,setComment]=useState("");

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
                                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                    <img src={submission.user?.avatar?.url}></img>
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
                                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                       <img src={user.avatar?.url}></img>
                                    </Avatar>
                                    <textarea placeholder='Write your Comment' value={comment} onChange={(e)=>setComment(e.target.value)}></textarea>
                                    <Button variant="contained" endIcon={<SendIcon />}>
                                        Send
                                    </Button>
                                </div>
                            </MDBCol>
                            <MDBCol md="1"></MDBCol>
                            <MDBCol md='5'>
                                <MDBCardBody>
                                    {/* <CommentSection/> */}
                                    <div style={{ height: '300px', overflowY: "scroll" }}>
                                        <Disscuss comment={comment} setComment={setComment} submissionId={submission._id}/>

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