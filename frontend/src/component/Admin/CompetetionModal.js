import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import DescriptionIcon from "@material-ui/icons/Description";
import StorageIcon from "@material-ui/icons/Storage";
import SpellcheckIcon from "@material-ui/icons/Spellcheck";

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    width: '50%',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

function CompetetionModal(props) {

  const [category, setCategory] = useState("");
  const categories = [
    "Video",
    "Images",
    "Text"
  ];
  const createImagesChange = (e) => {
    const files = Array.from(e.target.files);
    const name = e.target.name
    const arr = []
    files.forEach((file) => {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          arr.push(reader.result);
          setCompetetionData({
            ...competitionData,
            [name]: arr
          });
        }

      };
      reader.readAsDataURL(file);
    });
  };
  const competitionFields = {
    competitionName: "",
    competitionDescription: "",
    competitionGuidelines: "",
    competitionMedia: [],
    competitionLastSubmissionDate: "",
    competitionSubmissionType: "Choose Category",
  }
  useEffect(() => {
    setCompetetionData({
      ...competitionFields,
      ...props.data
    });
  }, [props.data,])

  function handleAddClick(e) {
    e.preventDefault();
    props.handleCompetition(e, { ...competitionData }, props.index);
  }
  function afterOpenModal(e) {
    props.onAfterOpen(e, 'After Modal Opened');
  }

  function onModalClose(event) {
    let data = { name: 'example', type: 'closed from child' };
    props.onCloseModal(event, data);
  }
  const [competitionData, setCompetetionData] = useState(competitionFields);
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setCompetetionData({
      ...competitionData,
      [name]: value
    });
  };

  // handle click event of the Remove button

  return (
    <div>
      <Modal
        isOpen={props.IsModalOpened}
        onAfterOpen={e => afterOpenModal(e)}
        style={customStyles}
        ariaHideApp={false}
      >
        <form
        onSubmit={handleAddClick}
        >
          <h2>Create Competetion</h2>
          <div className="box">
            <div>
              <SpellcheckIcon />
              <input
                type="text"
                required
                name="competitionName"
                placeholder="Enter Competetion Name"
                value={competitionData.competitionName}
                onChange={e => handleInputChange(e)}

              />
            </div>
            <div>
              <DescriptionIcon />
              <textarea
                placeholder="Event Description"
                name="competitionDescription"
                value={competitionData.competitionDescription}
                onChange={e => handleInputChange(e)}
                cols="30"
                rows="1"
                required
              ></textarea>
            </div>
            <div>
              <DescriptionIcon />
              <textarea
                placeholder="Competetion Guidelines"
                name="competitionGuidelines"
                value={competitionData.competitionGuidelines}
                onChange={e => handleInputChange(e)}
                cols="30"
                rows="1"
                required
              ></textarea>
            </div>
            <div>
              <p style={{ font: "400 1vmax cursive" }}>Last Submission Date:</p>
              <input name="competitionLastSubmissionDate"
                value={competitionData.competitionLastSubmissionDate}
                onChange={e => handleInputChange(e)}
                type="Date"
                required
                id="eventDate">
              </input>
            </div>
            <div id="eventMedia">
              <p style={{ font: "400 1vmax cursive" }}>Media :</p>
              <div id="createProductFormFile">
                <input
                  type="file"
                  name="competitionMedia"
                  accept="image/*,video/*"
                  onChange={createImagesChange}
                  required = {competitionData.competitionMedia.length > 0 ? "": "required"} 
                  multiple
                />
              </div>
            </div>
            {competitionData.competitionMedia.length > 0 ? <div id="createProductFormImage">
              {competitionData.competitionMedia.map((image, index) => (
                image.includes("image") ?
                  <img key={index} src={image} alt="Product Preview" />
                  : <video key={index} controls>
                    <source src={image} type="video/mp4" />
                  </video>
              ))}
            </div> : <></>}
            <div>
              <p >Submission Type</p>
              <select required value={competitionData.competitionSubmissionType} name="competitionSubmissionType" onChange={(e) => handleInputChange(e)}>
                <option value="" >Choose Category</option>
                {categories.map((cate) => (
                  <option key={cate} value={cate}>
                    {cate}
                  </option>
                ))}
              </select>
            </div>
            {/* <div className="btn-box">
              {inputList.length !== 1 && <button
                className="mr10"
                onClick={() => handleRemoveClick(i)}>Remove</button>}
              {inputList.length - 1 === i && <button onClick={handleAddClick}>Add</button>}
            </div> */}
            <button type='submit'>Add</button>
            <button onClick={e => onModalClose(e)}>close</button>
          </div>


        </form>



      </Modal>
    </div>
  );
}

export default CompetetionModal;