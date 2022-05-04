import React, { Fragment, useEffect } from "react";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, getEventDetails } from "../../actions/eventAction";
import Loader from "../layout/Loader/Loader";
import MetaData from "../layout/MetaData";
import "./NewEvent.css";
import CompetitionCard from "../Home/CompetitionCard";

function NewEvent({ match }) {
  const dispatch = useDispatch();
  const alert = useAlert();

  const { event, loading, error } = useSelector((state) => state.eventDetails);

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
    <>
      <Fragment>
        {loading ? (
          <Loader />
        ) : (
          <Fragment>
            <MetaData title={`${event.name} -- HarDinMahotsav`} />
            <header>
              <figure class="profile-banner">
                <img src={event.media?.url} alt={event.name} />
                {/* src="https://unsplash.it/2080/300"  */}
              </figure>
              <figure
                class="profile-picture"
                style={{ backgroundImage: "url('http://unsplash.it/150/150')" }}
              ></figure>
              <div class="profile-stats">
                <ul>
                  <li>
                    Event Date: <span>{event.eventDate?.split("T")[0]}</span>
                  </li>
                </ul>
              </div>
              <h1>
                <small>Event Name:</small>
                {event.name}
              </h1>
            </header>
            <div className="description">
                Description: <p>{event.description}</p>
            </div>

            <div className="section">
              <div className="heading">Competitions</div>
              <div className="competitions">
              {
                event.competitions?.map((competition)=>
                  <CompetitionCard key={competition.id} competition={competition} />
                )
              }
              </div>
            </div>
            
          </Fragment>
        )}
      </Fragment>
    </>
  );
}

export default NewEvent;