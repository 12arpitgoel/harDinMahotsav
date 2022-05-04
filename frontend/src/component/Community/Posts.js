import React , {useState,useEffect}  from 'react'
import "./community.css";
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
import CompetitionCard from './CompetitionCard';
import { setCORS } from "google-translate-api-browser";
// setting up cors-anywhere server address
const translate = setCORS("http://cors-anywhere.herokuapp.com/");

function Posts(props) {
  const [expandedCompetitions, setExpandedCompetitions] = React.useState(-1);
  const [translation, setTranslation] = React.useState(false);
  
  function handleExpandClick(i){
    if(expandedCompetitions==-1){
      setExpandedCompetitions(i);
    }else{
      setExpandedCompetitions(-1);
    }
    
  };
  let trans = {}
 

  useEffect(() => {
    Object.keys(props.post).forEach(function(key) {
    if(key=="name" || key=="description"){
     
        translate(props.post[key], { to: "en" })
    .then(res => {
      // I do not eat six days
      trans[key] = res.text;
      console.log(res.text)
    })
    .catch(err => {
      console.error(err);
    });
    }
    });
  

    
  }, []);

  return (
    <>
      <br />
      <Card sx={{ width: 600, minWidth: 50 }}>
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
          subheader={props.post.createdAt}
        />
        
        <CardMedia
          component="img"
          height="194"
          image={props.post.media.url}
          alt="Paella dish"
        />
        
        <CardContent>
          <p style={{fontSize:"1rem"}}>{props.post.name}</p>
          <Typography variant="body2" color="text.secondary">
           {props.post.description}
          </Typography>
          <br></br>
          <div>
          <IconButton aria-label="add to favorites">
            <CalendarMonthIcon />
          </IconButton>
          <span>Event Date : {props.post.eventDate}</span>
          </div>
          <IconButton aria-label="add to favorites">
            <LinkIcon />
          </IconButton>
          <Link style={{textDecoration: "none"}}  to={`/event/${props.post._id}`}><span>Go To Event's Page.</span></Link>
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
         
           {props.post?.competitions?.map((competition,index) => (
            <Button key={index} size='small' variant="contained">Competition {(index+1)}<ExpandMore
            expand={expandedCompetitions}
            onClick={()=> handleExpandClick(index)}
            aria-expanded={expandedCompetitions}
            aria-label="show more"
            >
            <ExpandMoreIcon />
          </ExpandMore></Button>

          ))}
         
        </CardActions>
        <Collapse in={expandedCompetitions==-1?false:true} timeout="auto" unmountOnExit>
          {expandedCompetitions==-1?<></>:<CompetitionCard data={props.post.competitions[expandedCompetitions]}/>}
          
        </Collapse>
        
      </Card>
      <br />
      <br />





    </>
  )
}

export default Posts