import React from "react";
import { Link } from "react-router-dom";
import { Rating } from "@material-ui/lab";
import "./Home.css";

const CompetitionCard = ({ competition }) => {
  
  return (
    <Link className="eventCard" to={`/competition/${competition._id}`}>
        <img src={competition.media?.url} alt={competition.name} />
        <p>{competition.name}</p>
        <span className="eventCardSpan">Last Submission Date:</span><span>{competition.lastSubmissionDate?.split("T")[0]}</span>
    </Link>
  );
};

export default CompetitionCard;