import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn } from 'mdb-react-ui-kit';


const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);


const CompetitionPreviewCard = (props) => {
    function removeCard(e){
        e.preventDefault();
        props.removeCard(props.index);
    }
    function reviewEditCompetition(e){
        props.openFromParent(props.index);
    }
    return (
        // <Box sx={{ minWidth: 275 }}>
        //     <Card variant="outlined" onClick={reviewEditCompetition}>
        //         <React.Fragment>
        //             <CardContent>
        //                 {/* <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        //                     Word of the Day
        //                 </Typography> */}
                        
        //                 {props.data.media.includes("image")? 
        //                  <img  src={props.data.media} alt="Product Preview" />
        //                  :<video  controls>
        //                      <source src={props.data.media} type="video/mp4"/>
        //                    </video>
                        
        //                 }
        //                 <Typography sx={{ mb: 1.5 }} color="text.secondary">
        //                     adjective
        //                 </Typography>
        //                 <Typography variant="body2">
        //                     well meaning and kindly.
        //                     <br />
        //                     {'"a benevolent smile"'}
        //                 </Typography>
        //             </CardContent>
        //             <CardActions>
        //                 <Button size="small">Learn More</Button>
        //             </CardActions>
        //         </React.Fragment>
        //     </Card>
        //     
        // </Box>
       

        <div style={{position:"relative"}}>
        <MDBCard style={{height:"90px",width:"110px",border:"black 10px"}} shadow='0' border='primary' background='white' className='mb-3' onClick={reviewEditCompetition} alignment='center'>
        {props.data.media.includes("image")? 
        <MDBCardImage style={{height:"100%",width:"100%"}} src={props.data.media} alt='...' position='top' />
         :<video style={{height:"100%",width:"100%"}} controls>
        <source src={props.data.media} type="video/mp4"/>
        </video>}
        {/* <MDBCardBody>
          <MDBCardText style={{textAlign : "center"}}>
           {props.data.name}
          </MDBCardText>
        </MDBCardBody> */}
      </MDBCard>
      <button style ={ { position:'absolute' , top:"10%" , right:"6%",borderRadius:"50%"}} onClick={removeCard}>X</button>
        </div>
  );

    
}
export default CompetitionPreviewCard;
