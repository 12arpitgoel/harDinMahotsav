import React, { useEffect, useState } from 'react'
import "./community.css";
import Posts from './Posts';
import NewsFeed from './NewsFeed';
import Stats from './Stats';
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, getEvents } from "../../actions/eventAction";
import { useAlert } from "react-alert";
import { Link } from 'react-router-dom';
let arr = ["", "", "", "", ""];
const Community = ()=> {

  const dispatch = useDispatch();

  const alert = useAlert();
  const {
    events,
    loading,
    error,
    eventsCount,
    resultPerPage,
    filteredEventsCount,
  } = useSelector((state) => state.events);
  useEffect(() => {
    if (error) {
      console.log(error);
      alert.error(error);
      dispatch(clearErrors());
    }

    dispatch(getEvents("", 1));
  }, [dispatch,error,alert]);
  console.log(events);
  return (
    <>
      <div style={{ position: 'relative', marginLeft: "26%" }}>
      <div style={{ position: "fixed", top: "30%", left: "2%" }} >
          <Stats />
        </div>
        <div className='postCards' >
          {
            
            events.map((event, index) => (
              
              <Posts post={event}/>
              
            ))
          }
        </div>
        <div style={{ position: "fixed", top: "1%", right: "3%" }} >
          <NewsFeed />
        </div>
      </div>
    </>
  );
}

export default Community