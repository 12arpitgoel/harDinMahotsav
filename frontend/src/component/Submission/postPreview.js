import React from 'react'
import { Button, Modal } from 'react-bootstrap'
import Card from '@mui/material/Card';
import { MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage, MDBRow, MDBCol } from 'mdb-react-ui-kit';

import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CommentIcon from '@mui/icons-material/Comment';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LinkIcon from '@mui/icons-material/Link';
import { Link } from 'react-router-dom';
import { Col } from 'react-bootstrap';
import CommentSection from './CommentSection';

function PostPreview(props) {
    return (
        <>
            <Modal
                size="lg"
                show={props.isOpened}
                onHide={() => props.onCloseModal()}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    {/* <Modal.Title id="example-modal-sizes-title-lg">
                        Large Modal
                    </Modal.Title> */}
                    {/* <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        R
                    </Avatar>
                    Participant's Name
                    <br/>
                    <div>
                        <small className='text-muted'>  Last updated 3 mins ago</small>

                    </div> */}

                    <Card sx={{ width: 1000 , minWidth: 50 }}>
                        <CardHeader
                            avatar={
                                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                    R
                                </Avatar>
                            }
                            // action={
                            //   <IconButton aria-label="settings">
                            //     <MoreVertIcon />
                            //   </IconButton>
                            // }
                            title="Shrimp and Chorizo Paella"
                            subheader="Last updated 3 mins ago"
                        />
                    </Card>

                </Modal.Header>
                <Modal.Body>
                    {/* <Card >
                        <CardHeader
                            avatar={
                                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                    R
                                </Avatar>
                            }
                            action={
                                <IconButton aria-label="settings">
                                    <MoreVertIcon />
                                </IconButton>
                            }
                            title="Shrimp and Chorizo Paella"
                            subheader="Heelo"
                        />

                        <CardMedia
                            component="img"
                            height="194"
                            image="http://www.mashupamericans.com/wp-content/uploads/2015/11/7ThingsDiwali_111115_EDITED.jpg"
                            alt="Paella dish"

                        />

                        <CardContent>
                        </CardContent>
                        <CardActions >
                            <IconButton aria-label="add to favorites">
                                <FavoriteIcon />
                            </IconButton>
                           
                        </CardActions>
                        
                    </Card> */}
                    <MDBCard style={{ maxWidth: '100%' }}>
                        <MDBRow className='g-0'>
                            <MDBCol  md='4'>
                                <MDBCardImage src='http://www.mashupamericans.com/wp-content/uploads/2015/11/7ThingsDiwali_111115_EDITED.jpg' alt='...' fluid />
                            </MDBCol>
                            <MDBCol md='8'>
                                <MDBCardBody>
                                    <CommentSection/>
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