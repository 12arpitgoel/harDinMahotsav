import React, { Fragment, useEffect, useState } from 'react';
import { useSelector } from "react-redux";

import AllSubmissions from './AllSubmissions';
import { Grid } from '@material-ui/core';
import NewSubmission from './NewSubmission';

const Submission = ({competitionId,submissions}) => {
  const [allSubmissions, setAllSubmissions] = useState(true);

  const { loading, isAuthenticated, user } = useSelector((state) => state.user);


  return (
    loading==true?<></>:<>
      {allSubmissions == false ? 
        <NewSubmission competitionId={competitionId}/>:
        <>
          <div style={{ marginLeft: "10%" }}>
            <br/>
            <h1>All Submissions</h1>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
              {submissions?.map((submission, index) => (
                <Grid key={submission._id} item xs={6} sm={6}>
                  <AllSubmissions index={index} sub={submission} user={user}/>
                </Grid>
              ))}
            </Grid>
          </div>
        </>}

    </>


  );
};

export default Submission;