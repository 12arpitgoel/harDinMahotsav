import React, { useEffect, useState } from 'react'
import "./community.css";
import Posts from './Posts';
import NewsFeed from './NewsFeed';
import Stats from './Stats';
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, getEvents } from "../../actions/eventAction";
import { useAlert } from "react-alert";
import { Link } from 'react-router-dom';
import { Card, Form, FormControl, ListGroup } from 'react-bootstrap';
import { Button, IconButton, InputAdornment, TextField } from '@mui/material';
import axios from 'axios';
import SearchIcon from '@mui/icons-material/Search';
const Community = () => {

  const dispatch = useDispatch();
  const [recommended, setRecommended] = React.useState(false);
  const [recommendedArr, setRecommendedArr] = React.useState([]);
  const [searchedWord , setSearchedWord] = React.useState("");
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
  }, [dispatch, error, alert]);

  async function handleRecommendation(e) {

    try {
      const config = {
        headers: { "Content-Type": "application/json" },
      };

      const { data } = await axios.get(
        `/api/v1/events/recommended`,
      );
      if (data.success) {
        setRecommended(true);
        setRecommendedArr(data.recs);
      }

    } catch (err) {
      console.log(err)
      alert.error(err.response.data.msg);
    }

  };
  async function handleSearch(e){
    dispatch(getEvents(searchedWord, 1));
  }

  function handlePosts(e) {
    setRecommended(false);
    setRecommendedArr([]);
  }

  return (
    <>
      <div style={{ position: 'relative', marginLeft: "26%" }}>
        <div style={{ position: "fixed", top: "27%", left: "2%" }} >
          <Card style={{ width: '18rem' }}>
            <ListGroup variant="flush">
              <ListGroup.Item><Button variant={recommended ? "outlined" : "contained"} onClick={(e) => handlePosts(e)}>All Events</Button></ListGroup.Item>
              <ListGroup.Item><Button variant={recommended ? "contained" : "outlined"} onClick={(e) => handleRecommendation(e)}>Recommended</Button></ListGroup.Item>
              <ListGroup.Item><Button  >Favourite</Button></ListGroup.Item>
            </ListGroup>
          </Card>
        </div>
        <div style={{ position: "fixed", top: "58%", left: "2%" }} >
          <Stats />
        </div>
        <div style={{ position: "fixed", top: "18%", left: "2%" , width:"18rem" ,display:"flex"}}>
          {/* <input placeholder='Search'></input> */}
          <TextField size='small'
            label="Search"
            value={searchedWord}
            onChange={(e)=> setSearchedWord(e.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment>
                  <IconButton>
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              )
            }}
          />
          <Button size='small' variant='primary'onClick={(e)=>handleSearch(e)} style={{background:"linear-gradient(to right, grey , lightblue)"}}>Search</Button>
        </div>
        <div className='postCards' >
          <br />
          <br />
          <br />
          <br />
          {/* <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form> */}

          {
            recommended ? recommendedArr.length > 0 ? recommendedArr.map((event, index) => (
              <Posts key={index} post={event} />
            )) : <></> :
              events?.map((event, index) => (

                <Posts key={index} post={event} />

              ))
          }
        </div>
        <div style={{ position: "fixed", top: "20%", right: "3%" }} >
          <NewsFeed />
        </div>
      </div>
    </>
  );
}

export default Community