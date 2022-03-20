import React from "react";
import { Link } from "react-router-dom";
import { Rating } from "@material-ui/lab";
import "./Home.css";

const CompetitionCard = ({ competition }) => {
  
  return (
    <div className="eventCard">
      <img src={competition.media.url} alt={competition.name} />
      <p>{competition.name}</p>
      <span className="eventCardSpan">Last Submission Date:</span><span>{competition.lastSubmissionDate.split("T")[0]}</span>
    </div>
  );
};

export default CompetitionCard;