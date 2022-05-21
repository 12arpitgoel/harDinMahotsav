import React, { useEffect } from 'react'
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
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
import PostPreview from './postPreview';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import InsertCommentOutlinedIcon from '@mui/icons-material/InsertCommentOutlined';
import axios from 'axios';
import { useAlert } from 'react-alert';

function AllSubmissions({sub,user}) {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [submission,setSubmission]=React.useState();
  const alert = useAlert();
  function handleCloseModal(event) {
    setIsOpen(false);
  }
  async function handleLike(e) {
    e.preventDefault();
    try {
      const res = await axios.get(`/api/v1/competition/submission/${submission._id}/like`);
      if(res.data.success)
        setSubmission(res.data.submission);
    } catch (err) {
        alert.error(err.response.data.msg);
    }
  };

  
  useEffect(()=>{
    setSubmission(sub);
  },[sub])

  return submission==null?<></>: (
    <>

      
      <br />

      <Card sx={{ width: 500, minWidth: 50 }} >
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} src={submission.user?.avatar?.url} aria-label="recipe" >
              
            </Avatar>
          }
          
          title={submission.name}
          subheader={submission.createdAt?.split("T")[0]}
        />

        <CardMedia
          component="img"
          height="194"
          image={submission.media?.url}
          alt="Paella dish"
          onClick={() => setIsOpen(true)}

        />
        <CardContent>
          {submission.description}
        </CardContent>
        <CardActions >
          <div onClick={(e) => handleLike(e)}>
            <IconButton aria-label="add to favorites" >
              {submission.likes?.includes(user._id) ? <ThumbUpIcon color='primary'/> : <ThumbUpOutlinedIcon />}
            </IconButton>
            <small>{submission.likes?.length}</small>
          </div>
          <div onClick={() => setIsOpen(true)}>
            <IconButton aria-label="comment" >
              <InsertCommentOutlinedIcon />
            </IconButton>
            <small> {submission.comments?.length}</small>
          </div>
        </CardActions>
      </Card>
      <br/>
      
      <PostPreview isOpened={modalIsOpen}
        onCloseModal={handleCloseModal} submission={submission} user={user}/>

    </>
  )
}

export default AllSubmissions