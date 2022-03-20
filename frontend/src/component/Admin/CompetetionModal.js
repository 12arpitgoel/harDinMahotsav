import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import DescriptionIcon from "@material-ui/icons/Description";
import StorageIcon from "@material-ui/icons/Storage";
import "./competitionModal.css";
import SpellcheckIcon from "@material-ui/icons/Spellcheck";



const customStyles = {
  content: {
    
   
    width: '50%',
    left:'24%'
     //marginRight: '-50%',
    // transform: 'translate(-50%, -50%)',
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
    console.log(name,files);
    const arr = []
    files.forEach((file,index) => {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          
          setCompetetionData({
            ...competitionData,
            [name]: reader.result
          });
        }
      };
      reader.readAsDataURL(file);
    });
  };
  const competitionFields = {
    name: "",
    description: "",
    guidelines: [""],
    media: " ",
    lastSubmissionDate: "",
    submissionType: "Choose Category",
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
    
    const a = [value];
    
    setCompetetionData({
      ...competitionData,
      [name]: name=="guidelines" ? a:value
    });
  };

  // handle click event of the Remove button

  return (
    <div >
      <Modal
        isOpen={props.IsModalOpened}
        onAfterOpen={e => afterOpenModal(e)}
        style={customStyles}
        ariaHideApp={false}
      >
        <form
        onSubmit={handleAddClick}
        >
          <div className='competition'>
          <h2 className='heading'>Create Competetion</h2>
          <div className="box">
            <div>
              <SpellcheckIcon className='icon' />
              <input
              className='competitionInput'
                type="text"
                required
                name="name"
                placeholder="Enter Competetion Name"
                value={competitionData.name}
                onChange={e => handleInputChange(e)}

              />
            </div>
            <div>
              <DescriptionIcon className='icon'/>
              <textarea
              className='competitionInput'
                placeholder="Event Description"
                name="description"
                value={competitionData.description}
                onChange={e => handleInputChange(e)}
                cols="40"
                rows="2"
                required
              ></textarea>
            </div>
            <div>
              <DescriptionIcon className='icon'/>
              <textarea
              className='competitionInput'
                placeholder="Competetion Guidelines"
                name="guidelines"
                value={competitionData.guidelines[0]}
                onChange={e => handleInputChange(e)}
                cols="40"
                rows="2"
                required
              ></textarea>
            </div>
            <div>
              <p style={{ font: "400 1vmax cursive" }}>Last Submission Date:</p>
              <input name="lastSubmissionDate"
                value={competitionData.lastSubmissionDate}
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
                  name="media"
                  accept="image/*,video/*"
                  onChange={createImagesChange}
                  required = {competitionData.media==" "? "required" : " "} 
                  
                />
              </div>
            </div>
            {competitionData.media == " "  ?<></>: <div id="createProductFormImage">
              
                {competitionData.media.includes("image") ?
                  <img src={competitionData.media} alt="Product Preview" />
                  : <video  controls>
                    <source src={competitionData.media} type="video/mp4" />
                  </video>
              }
            </div>  }
            <div>
              <p id="footer" >Submission Type</p>
              <select required value={competitionData.submissionType} name="submissionType" onChange={(e) => handleInputChange(e)}>
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
            <button className='addButton' type='submit'>Add</button>
            <button className='mr10' onClick={e => onModalClose(e)}>close</button>
          </div>
          </div>
          


        </form>



      </Modal>
    </div>
  );
}

export default CompetetionModal;