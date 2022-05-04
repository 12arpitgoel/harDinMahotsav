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

function AllSubmissions(props) {
    const [modalIsOpen, setIsOpen] = React.useState(false);
    function handleCloseModal(event, data) {
        console.log(event, data);
        setIsOpen(false);
      }
  return (
      <>
      
      <br/>
      <br/>
     
       <Card sx={{ width: 500, minWidth: 50 }}onClick={()=> setIsOpen(true)}>
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
          
        />
        
        <CardContent>
          
          
         
        </CardContent>
        <CardActions >
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          {/* <IconButton aria-label="share">
            <ShareIcon />
          </IconButton> */}
          <IconButton aria-label="comment">
            <CommentIcon/>
          </IconButton>
         
           
         
        </CardActions>
        {/* <Collapse in={props.index==0 } timeout="auto" unmountOnExit>
        <CardContent>
            <Typography paragraph>Guidelines</Typography>
            <Typography paragraph>
            Heelo
            </Typography>
          </CardContent>
        </Collapse> */}
        
      </Card>
      <PostPreview isOpened={modalIsOpen}
      onCloseModal={handleCloseModal}/>
  
      </>
  )
}

export default AllSubmissions