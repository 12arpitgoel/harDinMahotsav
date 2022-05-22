import React, { Fragment, useEffect } from "react";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../layout/Loader/Loader";
import MetaData from "../layout/MetaData";
// import "./Competition.css";
import { getCompetitionDetails, clearErrors } from "../../actions/competitionActions";
import Submission from "../Submission/Submission";
import Form from 'react-bootstrap/Form'
import FormCheck from 'react-bootstrap/FormCheck'
import axios from "axios";


const Competition = ({ match }) => {
  const dispatch = useDispatch();
  const alert = useAlert();

  const { competition, loading, error } = useSelector((state) => state.competitionDetails);
  const [translation, setTranslation] = React.useState(false);
  const [translationObj, setTranslationObj] = React.useState({});

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    dispatch(getCompetitionDetails(match.params.id));
  }, [dispatch, match.params.id, error, alert, loading]);

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
        `/api/v1/competition/${competition._id}/translate`,
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
  return (
    <>
      <Fragment>
        {loading ? (
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

            </header>
            <div style={{ display: "flex", justifyContent: "center", color: "#354B63", fontSize: "50px", margin: "auto" }}>
              <h1>
                <small></small>
                {Object.keys(translationObj).length != 0 ? translationObj.translatedEvent.name :competition.name}
              </h1>
            </div>
            {/* <h1>
              All Submissions
            </h1> */}
            <Form style={{ marginTop: "22px", marginLeft: "15px" }}>
              <Form.Check
                type="switch"
                id="custom-switch"
                label={translation == true ? "Back to Original" : "Translate To English"}
                onChange={ handleTranslationSwitch}
              />

            </Form>
            <div className="description">
              Description: <p style={{ padding: '50px' }}>{Object.keys(translationObj).length != 0 ? translationObj.translatedEvent.description :competition.description}</p>
            </div>
            <div className="description">
              Guidelines: <p style={{ padding: '50px' }}>{Object.keys(translationObj).length != 0 ? translationObj.translatedEvent.guidelines :competition.guidelines}</p>
            </div>
            <Submission competitionId={match.params.id} submissions={competition.submissions} />

          </Fragment>
        )}
      </Fragment>
    </>
  );
}

export default Competition