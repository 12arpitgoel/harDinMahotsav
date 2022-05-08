import React from 'react'
import { Modal } from 'react-bootstrap'
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import './postPreview.css'
import { MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import SendIcon from '@mui/icons-material/Send';
import CardHeader from '@mui/material/CardHeader';

import Avatar from '@mui/material/Avatar';
import { red } from '@mui/material/colors';

import Disscuss from './Disscuss';

function PostPreview(props) {
    return (
        <>
            <Modal
                size="lg"
                // fullscreen={true}
                show={props.isOpened}
                onHide={() => props.onCloseModal()}
                aria-labelledby="example-modal-sizes-title-lg"
                dialogClassName="my-modal"
            >
                <Modal.Header closeButton>
                    <Card sx={{ width: 1000, minWidth: 50 }}>
                        <CardHeader
                            avatar={
                                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                    R
                                </Avatar>
                            }
                            title="Shrimp and Chorizo Paella"
                            shsfhsfhdfhdfhdg
                            subheader="Last updated 3 mins ago"
                        />
                    </Card>
                </Modal.Header>
                <Modal.Body>
                    <MDBCard style={{ maxWidth: '100%' }}>
                        <MDBRow className='g-0'>
                            <MDBCol style={{ display: 'flex', flexDirection: 'column', justifyContent: "space-around" }} md='6'>
                                <MDBCardImage src='http://www.mashupamericans.com/wp-content/uploads/2015/11/7ThingsDiwali_111115_EDITED.jpg' alt='...' fluid />
                                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: "space-evenly" }}>
                                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                        R
                                    </Avatar>
                                    <textarea placeholder='Write your Comment'></textarea>
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
                                        <Disscuss />

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