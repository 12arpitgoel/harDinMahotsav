import React, { Fragment, useEffect, useState } from "react";
import "./newProduct.css";
import { useSelector, useDispatch } from "react-redux";
//import { clearErrors, createProduct } from "../../actions/productAction";
import { useAlert } from "react-alert";
import { Button } from "@material-ui/core";
import MetaData from "../layout/MetaData";
import AccountTreeIcon from "@material-ui/icons/AccountTree";
import DescriptionIcon from "@material-ui/icons/Description";
import StorageIcon from "@material-ui/icons/Storage";
import SpellcheckIcon from "@material-ui/icons/Spellcheck";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import SideBar from "./Sidebar";
import Modal from 'react-modal';
import CompetetionModal from "./CompetetionModal";
import CompetitionPreviewCard from './CompetitionPreviewCard'
import { clearErrors, login, register } from "../../actions/userAction";

//import { NEW_PRODUCT_RESET } from "../../constants/productConstants";

const CreateEvent = ({ history }) => {
  const dispatch = useDispatch();
  const alert = useAlert();

  //const { loading, error, success } = useSelector((state) => state.newProduct);

  const [name, setName] = useState("");
  const [eventDate,setEventDate] = useState("");
  const [description, setDescription] = useState("");
  const [imagesPreview, setImagesPreview] = useState([]);

  const createProductSubmitHandler = (e) => {
    e.preventDefault();
    const myForm = new FormData();
    myForm.set("name", name);
    myForm.set("description", description);
    myForm.set("competition",inputList);
    myForm.set("media",imagesPreview[0]);
    myForm.set("eventDate",eventDate);  
   // dispatch(createProduct(myForm));
  };
  
  const modalData = {
    title: 'My Title From Parent',
    body: ['Apple', 'Ipple', 'Opple', 'Upple', 'Epple']
  };
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [listIndex,setListIndex] = useState(-1);
  const [data,setData]=useState({});
  function openFromParent(i) {
    
    setListIndex(i);
    if(i>=0){
      setData(inputList[i]);
    }
    else{
      setData({});
    }
    setIsOpen(true); 
  }

  function handleCloseModal(event, data) {
    console.log(event, data);
    setIsOpen(false);
  }

  function handleAfterOpen(event, data) {
    console.log(event, data);
  }
  const createProductImagesChange = (e) => {
    const files = Array.from(e.target.files);
    setImagesPreview([]);

    files.forEach((file) => {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setImagesPreview((old) => [...old, reader.result]);
        }
      };
      
      reader.readAsDataURL(file);
      console.log(imagesPreview)
    });
  };
  const [inputList, setInputList] = useState([]);

  const handleAddClickCompetition = (e,data,i) => {
    if(i<0){
      setInputList([...inputList, data]);
    }else{
      let competitionList = inputList.map((competition,index)=>{
        return index==i ? data : competition;
      });
      setInputList(competitionList);
    }  
    setIsOpen(false);
  };
  const cardRemove =(i) =>{
    var filteredInputList = inputList.filter(function(value, index, arr){ 
      return index != i;
    });
    setInputList(filteredInputList)
  }
  return (
    <Fragment>
      <MetaData title="Create Event" />
      <div className="dashboard">
        <div className="newProductContainer">
          <form
            className="createProductForm"
            encType="multipart/form-data"
            onSubmit={createProductSubmitHandler}
          >
            <h1>Create Event</h1>
            <div>
              <SpellcheckIcon />
              <input
                type="text"
                placeholder="Event Name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <DescriptionIcon />
              <textarea
                placeholder="Event Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                cols="30"
                rows="1"
                required
              ></textarea>
            </div>
            <div id = "eventMedia">
            <p style={{font: "400 1vmax cursive"}}>Media :</p>
              <div id="createProductFormFile">
                <input
                  type="file"
                  name="avatar"
                  accept="image/*,video/*"
                  onChange={createProductImagesChange}
                  required
                  multiple
                />
              </div>
              
            </div>
            {imagesPreview.length > 0 ? <div id="createProductFormImage">
              {imagesPreview.map((image, index) => (
                image.includes("image")?
                <img key={index} src={image} alt="Product Preview" />
                :<video key={index} controls>
                    <source src={image} type="video/mp4"/>
                  </video>
              ))}
            </div> :<></>}
            <div>
              <p style={{font: "400 1vmax cursive"}}>Event Date:</p>
              <input type="Date" id="eventDate" required  onChange={(e) => setEventDate(e.target.value)}></input>
            </div>
            <div>
              <p style={{font: "400 1vmax cursive"}}>Competitions:</p>
              <Button
              id="createCompetition"

              onClick={()=>openFromParent(-1)}
              // type="submit"
             // disabled={loading ? true : false}
              >
                + 
              </Button>
            </div>
            {inputList.length > 0 ? <div id="createProductFormImage">
              {inputList.map((input, index) => (
                <CompetitionPreviewCard
                index={index}
                removeCard={cardRemove}
                openFromParent={openFromParent}/>
              ))}
            </div> :<></>}
            <Button
              id="createProductBtn"
              type="submit"
             // disabled={loading ? true : false}
            >
              Create
            </Button>  
            <CompetetionModal   
              data={data}
              index={listIndex}
              handleCompetition={handleAddClickCompetition}
              IsModalOpened={modalIsOpen}
               onCloseModal={handleCloseModal}
               onAfterOpen={handleAfterOpen}
              />
               
            
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default CreateEvent;