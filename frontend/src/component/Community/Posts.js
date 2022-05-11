import React, { useState, useEffect } from 'react'
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
import axios from 'axios';
import { useAlert } from 'react-alert';
import Form from 'react-bootstrap/Form'
import FormCheck from 'react-bootstrap/FormCheck'

// setting up cors-anywhere server address


function Posts(props) {
  const [expandedCompetitions, setExpandedCompetitions] = React.useState(-1);
  const [translation, setTranslation] = React.useState(false);
  const [translationObj, setTranslationObj] = React.useState({});
  const alert = useAlert();

  function handleExpandClick(i) {
    if (expandedCompetitions == -1) {
      setExpandedCompetitions(i);
    } else {
      setExpandedCompetitions(-1);
    }

  };
  function handleTranslationSwitch(e){
    
    if(translation){
      setTranslationObj({});
      setTranslation(false);
    }else{
      handleTranslation(e);
    }
  }
  async function handleTranslation(e) {
    
    try {
      const config = {
        headers: { "Content-Type": "application/json" },
      };

      const { data } = await axios.get(
        `/api/v1/event/${props.post._id}/translate`,
      );
      if (data.success) {
        setTranslation(true);
        setTranslationObj(data);
      }

    } catch (err) {
      console.log(err)
      alert.error(err.response.data.msg);
    }
  };


  // useEffect(() => {
  //   Object.keys(props.post).forEach(function(key) {
  //   if(key=="name" || key=="description"){

  //       translate(props.post[key], { to: "en" })
  //   .then(res => {

  //     trans[key] = res.text;
  //     console.log(res.text)
  //   })
  //   .catch(err => {
  //     console.error(err);
  //   });
  //   }
  //   });



  // }, []);

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
            // <IconButton aria-label="settings">
            //   <MoreVertIcon />
            // </IconButton>
            // <Button onClick={(e)=>handleTranslation(e)}>Translate To English</Button>
            <Form>
              <Form.Check
                type="switch"
                id="custom-switch"
                label={translation==true?"Back to Original":"Translate To English"}
                onChange={(e)=>handleTranslationSwitch(e)}
              />
              
            </Form>
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

          {/* {console.log(translationObj.translatedEvent.name,translationObj.translatedEvent.description)} */}
          <p style={{ fontSize: "1rem" }}>{Object.keys(translationObj).length != 0 ? translationObj.translatedEvent.name : props.post.name}</p>
          <Typography variant="body2" color="text.secondary">
            {Object.keys(translationObj).length != 0 ? translationObj.translatedEvent.description : props.post.description}
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
          <Link style={{ textDecoration: "none" }} to={`/event/${props.post._id}`}><span>Go To Event's Page.</span></Link>
        </CardContent>
        <CardActions >
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          {/* <IconButton aria-label="share">
            <ShareIcon />
          </IconButton> */}
          <IconButton aria-label="comment">
            <CommentIcon />
          </IconButton>

          {props.post?.competitions?.map((competition, index) => (
            <Button key={index} size='small' variant="contained">Competition {(index + 1)}<ExpandMore
              expand={expandedCompetitions}
              onClick={() => handleExpandClick(index)}
              aria-expanded={expandedCompetitions}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore></Button>

          ))}

        </CardActions>
        <Collapse in={expandedCompetitions == -1 ? false : true} timeout="auto" unmountOnExit>
          {expandedCompetitions == -1 ? <></> : <CompetitionCard data={Object.keys(translationObj).length != 0 ? translationObj.translatedEvent.competitions[expandedCompetitions] : props.post.competitions[expandedCompetitions]} />}

        </Collapse>

      </Card>
      <br />
      <br />





    </>
  )
}

export default Posts