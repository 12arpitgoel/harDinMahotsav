import React, { Fragment, useEffect, useState } from "react";
import Carousel from "react-material-ui-carousel";

import "./EventDetails.css";
import { useSelector, useDispatch } from "react-redux";
import {
  clearErrors,
  getEventDetails,
} from "../../actions/eventAction";
// import ReviewCard from "./ReviewCard.js";
import Loader from "../layout/Loader/Loader";
import { useAlert } from "react-alert";
import MetaData from "../layout/MetaData";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  Box,
  Tabs,
  Tab,
  Typography,
  Divider,
} from "@material-ui/core";
import PropTypes from 'prop-types';
import CompetitionCard from "../Home/CompetitionCard";

const EventDetails = ({ match }) => {
  const dispatch = useDispatch();
  const alert = useAlert();

  const { event, loading, error } = useSelector(
    (state) => state.eventDetails
  );

  const [competition,setCompetition]=useState({
    name:"Competion 1 ",
    description:"sdfggfgdsd fghfdgfsa sgghjhfgdsfa sdfhgjhjg fdsfdgfhgjk dsadfdgfhgjhg fdsfdgfhgjfdgsf adfdgfhgjfds fdgfhghgfds dfghhjghfgeueyukymhngb retyjydnbdv",
    lastSubmissionDate:"22-02-16",
    media:{
      url:"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
    },
    guidelines:[
      "asDF dfghj sdgfhgjhkj asdfhgjhkh sdfghh dsgfhj",
      "sdgfhgjhkj dfghj sdgfhgjhkj asdfhgjhkh sdfghh dsgfhj iutycghvhjbkj mewfusvghj ejfgciuia;owmknd whefvuiebf wjkeburwj fewkbjrekjw",
      "asDF dfghj sdgfhgjhkj asdfhgjhkh sdfghh dsgfhj",
    ]
  })


  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    dispatch(getEventDetails(match.params.id));
  }, [dispatch, match.params.id, error, alert, loading]);

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title={`${event?.name} -- HarDinMahotsav`} />
          <div className="EventDetails">
            <div>
              <img
                className="CarouselImage"
                src={event.media && event.media.url }
                alt={event.name}
              />
            </div>

            <div>
              <div className="detailsBlock-1">
                <h2>{event.name}</h2>
              </div>

              <p>
                  EventDate:
                  <b> {event.eventDate?.split("T")[0]}</b>
              </p>

              <div className="detailsBlock-4">
                Description: <p>{event.description}</p>
              </div>
            </div>
          </div>

          <div className="EventData">
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                <Tab label="Competitions" {...a11yProps(0)} />
                <Tab label="Discuss" {...a11yProps(1)} />
              </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
              <div className="competitions">
              {
                event.competitions?.map((competition)=>
                  <CompetitionCard key={competition.id} competition={competition} />
                )
              }
              </div>
              <Divider></Divider>

              
              <div className="card">
                <div className="listTile">
                  <div className="leading">
                    <img className="image" src={competition.media.url}/>
                  </div>
                  <div className="body">
                    <div className="title">{competition.name}</div>
                    <div className="description">{competition.description}</div>
                  </div>
                  <div className="trailing">
                    Last Submission Date:
                    <p><b>{competition.lastSubmissionDate.split("T")[0]}</b></p>
                  </div>
                </div>
              
                <div className="body">
                  <div className="heading">Guidelines</div>
                  <ol type="1">
                    {competition.guidelines.map((guide,index)=>
                      <li key={index}>{guide}</li>
                    )}
                  </ol>
                </div>
              </div>

            </TabPanel>
            <TabPanel value={value} index={1}>
              discuss
            </TabPanel>
          </div>
          
        </Fragment>
      )}
    </Fragment>
  );
};

export default EventDetails;

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}