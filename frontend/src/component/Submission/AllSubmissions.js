import React from 'react'
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

function AllSubmissions(props) {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [isLiked, setIsLiked] = React.useState(false);
  function handleCloseModal(event) {
    setIsOpen(false);
  }
  function handleLike(e) {
    e.preventDefault();
    setIsOpen(!isLiked);
  }
  return (
    <>

      <br />
      <br />

      <Card sx={{ width: 500, minWidth: 50 }} >
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
          subheader="Heelo"
        />

        <CardMedia
          component="img"
          height="194"
          image="http://www.mashupamericans.com/wp-content/uploads/2015/11/7ThingsDiwali_111115_EDITED.jpg"
          alt="Paella dish"
          onClick={() => setIsOpen(true)}

        />
        <CardContent>
        </CardContent>
        <CardActions >
          <div onClick={(e) => handleLike(e)}>
            <IconButton aria-label="add to favorites" >
              {isLiked == false ? <ThumbUpIcon /> : <ThumbUpOutlinedIcon />}
            </IconButton>
            <small> 34</small>
          </div>
          <div onClick={() => setIsOpen(true)}>
            <IconButton aria-label="comment" >
              <InsertCommentOutlinedIcon />
            </IconButton>
            <small> 34</small>
          </div>
        </CardActions>
      </Card>
      <PostPreview isOpened={modalIsOpen}
        onCloseModal={handleCloseModal} />

    </>
  )
}

export default AllSubmissions