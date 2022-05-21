import React, { Fragment, useEffect, useState } from 'react';
import Message from './Message';
import Progress from './Progress';
import axios from 'axios';
import { Card, Col, Row } from 'react-bootstrap';
import DescriptionIcon from "@material-ui/icons/Description";
import SpellcheckIcon from "@material-ui/icons/Spellcheck";

const NewSubmission = ({competitionId}) => {
    const [filename, setFilename] = useState('Choose File');
    const [uploadedFile, setUploadedFile] = useState({});
    const [message, setMessage] = useState('');
    const [uploadPercentage, setUploadPercentage] = useState(0);
    const [name, setName] = useState("");
    const [readerFile, setReaderFile] = useState("");
    const [description, setDescription] = useState("");

    const onChange = e => {
        setFilename(e.target.files[0].name);
        const reader = new FileReader();
        reader.onload = () => {
          if (reader.readyState === 2) {
            setReaderFile(reader.result);
          }
        };
        reader.readAsDataURL(e.target.files[0]);
      };
    
      const onSubmit = async e => {
        e.preventDefault();
        const formData = new FormData();
        formData.set("name", name);
        formData.set("description", description);
        formData.set('file', readerFile);
        formData.set('competitionId', competitionId);
    
        try {
          const res = await axios.post('/api/v1/competition/submission', formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            },
            onUploadProgress: progressEvent => {
              setUploadPercentage(
                parseInt(
                  Math.round((progressEvent.loaded * 100) / progressEvent.total)
                )
              );
            }
          });
    
          // Clear percentage
          setTimeout(() => setUploadPercentage(0), 10000);
    
          const { fileName, filePath } = res.data;
    
          setUploadedFile({ fileName, filePath });
    
          setMessage('File Uploaded');
        } catch (err) {
          if (err.response.status === 500) {
            setMessage(err.response.data.message);
          } else {
            setMessage(err.response.data.msg);
          }
          setUploadPercentage(0)
        }
      };
  return (
    <div className='container mt-4'>
        <Card sx={{height:"300"}}>
        <Card.Header className='text-centered'>Your Submission</Card.Header>
        <Card.Body>

            <Fragment>
            {message ? <Message msg={message} /> : null}
            <form onSubmit={onSubmit}>
                <div style={{ display: "flex", flexDirection: 'column', justifyContent: 'space-between' , height:"250px"}}>
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
                <div className='custom-file mb-4'>
                    <input
                    type='file'
                    className='custom-file-input'
                    id='customFile'
                    required
                    accept="image/*"
                    onChange={onChange}
                    />
                    <label className='custom-file-label' htmlFor='customFile'>
                    {filename}
                    </label>
                    <Progress percentage={uploadPercentage} />
                    <input
                    type='submit'
                    value='Upload'
                    className='btn btn-primary btn-block mt-4'
                    />
                </div>
                </div>
            </form>
            {uploadedFile ? (
                <div className='row mt-5'>
                <div className='col-md-6 m-auto'>
                    <h3 className='text-center'>{uploadedFile.fileName}</h3>
                    <img style={{ width: '100%' }} src={uploadedFile.filePath} alt='' />
                </div>
                </div>
            ) : null}
            </Fragment>

        </Card.Body>
        </Card>
    </div>
  )
}

export default NewSubmission