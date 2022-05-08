import React, { Fragment, useEffect } from "react";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../layout/Loader/Loader";
import MetaData from "../layout/MetaData";
import "./Competition.css";
import { getCompetitionDetails,clearErrors } from "../../actions/competitionActions";
import Submission from "../Submission/Submission";

const Competition = ({match}) => {
    const dispatch = useDispatch();
    const alert = useAlert();
  
    const { competition, loading, error } = useSelector((state) => state.competitionDetails);
  
    useEffect(() => {
      if (error) {
        alert.error(error);
        dispatch(clearErrors());
      }
      
      dispatch(getCompetitionDetails(match.params.id));
    }, [dispatch, match.params.id, error, alert, loading]);
  
  
    return (
      <>
        <Fragment>
          {loading? (
            <Loader />
          ) : competition && (
            <Fragment>
              <MetaData title={`${competition.name} -- HarDinMahotsav`} />
              <header>
                <figure class="profile-banner">
                  <img src={competition?.media?.url} alt={competition.name} />
                  {/* src="https://unsplash.it/2080/300"  */}
                </figure>
                <figure
                  class="profile-picture"
                  style={{ backgroundImage: "url('http://unsplash.it/150/150')" }}
                ></figure>
                <div class="profile-stats">
                  <ul>
                    <li>
                      Last Submission Date <span>{competition.lastSubmissionDate?.split("T")[0]}</span>
                    </li>
                  </ul>
                </div>
                <h1>
                  <small>Competition Name:</small>
                  {competition.name}
                </h1>
                
              </header>
              <h1>
                  All Submissions
                </h1>

              <Submission/>
              
            </Fragment>
          )}
        </Fragment>
      </>
    );
}

export default Competition