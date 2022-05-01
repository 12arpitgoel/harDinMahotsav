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
import UploadIcon from '@mui/icons-material/Upload';


function CompetitionCard(props) {
  const [expandedGuideLines, setExpandedGuideLines] = React.useState(false);
  const handleExpandGuideLinesClick = () => {
    setExpandedGuideLines(!expandedGuideLines);
  };

  return (
    <>
    <Card>
    <CardMedia
            component="img"
            height="194"
            image={props.data.media.url}
            alt="Paella dish"
          />
          <CardContent>
            <Typography paragraph>{props.data.name}</Typography>
           
            <Typography paragraph>
            {props.data.description}
            </Typography>
            <div>
          <IconButton aria-label="last-date">
            <CalendarMonthIcon />
          </IconButton>
          <span>Last Submission Date :{props.data.lastSubmissionDate}</span>
          </div>
          <div>
          <IconButton aria-label="category">
            <UploadIcon />
          </IconButton>
          <span>Submission Type : </span>
          <span>{props.data.submissionType}</span>
          </div>
          </CardContent>
          <CardActions><Button size='small' variant="contained">Guidelines <ExpandMore
            expand={expandedGuideLines}
            onClick={handleExpandGuideLinesClick}
            aria-expanded={expandedGuideLines}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore></Button></CardActions>
          
          <Collapse in={expandedGuideLines} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Guidelines</Typography>
            <Typography paragraph>
             {props.data.guidelines[0]}
            </Typography>
          </CardContent>
          </Collapse>
        
          </Card>
    </>
  )
}

export default CompetitionCard