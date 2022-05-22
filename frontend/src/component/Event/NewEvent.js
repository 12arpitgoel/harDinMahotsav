import React, { Fragment, useEffect } from "react";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, getEventDetails } from "../../actions/eventAction";
import Loader from "../layout/Loader/Loader";
import MetaData from "../layout/MetaData";
import "./NewEvent.css";
import CompetitionCard from "../Home/CompetitionCard";
import Form from 'react-bootstrap/Form'
import FormCheck from 'react-bootstrap/FormCheck'
import axios from "axios";
import Switch from '@mui/material/Switch';


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
  const [translation, setTranslation] = React.useState(false);
  const [translationObj, setTranslationObj] = React.useState({});

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  function handleTranslationSwitch(e) {
    console.log("Hello");
    if (translation) {
      setTranslationObj({});
      setTranslation(false);
    } else {
      handleTranslation(e);
    }
  }
  async function handleTranslation(e) {
    console.log("Hello");
    try {
      const config = {
        headers: { "Content-Type": "application/json" },
      };

      const { data } = await axios.get(
        `/api/v1/event/${event._id}/translate`,
      );
      console.log(data)
      if (data.success) {
        setTranslation(true);
        setTranslationObj(data);
      }

    } catch (err) {
      console.log(err)
      alert.error(err.response.data.msg);
    }
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
                {console.log(event.user?.avatar.url)}
                {/* src="https://unsplash.it/2080/300"  */}
              </figure>
              <figure
                class="profile-picture"
                style={{ backgroundImage: `url(${event.user?.avatar.url})` }}
              ></figure>
              <div class="profile-stats">
                <ul>
                  <li>
                    Event Date: <span>  {event.eventDate?.split("T")[0]}</span>
                  </li>

                </ul>
              </div>


            </header>
            <div style={{ display: "flex", justifyContent: "center", color: "#354B63", fontSize: "50px", margin: "auto" }}>
              <h1>
                <small></small>
                {Object.keys(translationObj).length != 0 ? translationObj.translatedEvent.name : event.name}
              </h1>

            </div>
            <Form style={{ marginTop: "22px", marginLeft: "15px" }}>
              <Form.Check
                type="switch"
                id="hello"
                label={translation == true ? "Back to Original" : "Translate To English"}
                onChange={ handleTranslationSwitch}
              />

            </Form>
            <div className="description">
              Description: <p style={{ padding: '50px' }}>{Object.keys(translationObj).length != 0 ? translationObj.translatedEvent.description : event.description}</p>
            </div>

            <div className="section" style={{ backgroundImage: "linear-gradient(to right, grey , lightblue)" }}>
              <div className="description">Competitions</div>
              <div className="competitions">
                {
                  event.competitions?.map((competition) =>
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
