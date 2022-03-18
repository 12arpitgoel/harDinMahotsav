import React ,{useEffect, useState} from 'react';
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
  const competetionFields = {
    competetionName:"",
    competetionDescription:"",
    competetionGuidelines:"",
    competetionMedia:{},
    competetionLastSubmissionDate:"",
    competetionSubmissionType:"" ,
  }

  useEffect(()=>{
    setCompetetionData({
      ...competetionFields,
      ...props.data
    })
  },[props.data])

  function handleAddClick(e){
    props.handleCompetition(e,{...competetionData},props.index);
  }
  function afterOpenModal(e) {
    props.onAfterOpen(e, 'After Modal Opened');
  }

  function onModalClose(event) {
    let data = { name: 'example', type: 'closed from child' };
    props.onCloseModal(event, data);
  }
   const [competetionData, setCompetetionData] = useState(competetionFields);
   //const [openedByCard,setOpenedByCard] = useState(Object.keys(props.data).length === 0?false:true);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(name,value);
     setCompetetionData({
      ...competetionData,
      [name]:value
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
        <h2>Create Competetion</h2>
          <div className="box">
            <div>
              <SpellcheckIcon />
              <input
                type="text"
                required
                name="competetionName"
                placeholder="Enter Competetion Name"
                 value={competetionData.competetionName}
                 onChange={e => handleInputChange(e)}
              />
            </div>
            <div>
              <DescriptionIcon />
              <textarea
                placeholder="Event Description"
                name="competetionDescription"
                value={competetionData.competetionDescription}
                 onChange={e => handleInputChange(e )}
                cols="30"
                rows="1"
              ></textarea>
            </div>
            <div>
              <DescriptionIcon />
              <textarea
                placeholder="Competetion Guidelines"
                name="competetionGuidelines"
                value={competetionData.competetionGuidelines}
                onChange={e => handleInputChange(e)}
                cols="30"
                rows="1"
              ></textarea>
            </div>
            <div>
              <p style={{font: "400 1vmax cursive"}}>Last Submission Date:</p>
              <input type="Date" id="eventDate"></input>
            </div>
            <div id = "eventMedia">
            <p style={{font: "400 1vmax cursive"}}>Media :</p>
              <div id="createProductFormFile">
                <input
                  type="file"
                  name="avatar"
                  accept="image/*,video/*"
                  // onChange={createProductImagesChange}
                  multiple
                />
              </div> 
            </div>
            <div>
              <p >Submission Type</p>
              <select onChange={(e) => setCategory(e.target.value)}>
                <option value="">Choose Category</option>
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
              <button onClick={e => handleAddClick(e)}>Add</button>
              <button onClick={e => onModalClose(e)}>close</button>
          </div>
          
        
      </Modal>
    </div>
  );
}

export default CompetetionModal;