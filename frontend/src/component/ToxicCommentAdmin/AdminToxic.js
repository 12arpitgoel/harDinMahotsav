import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import FolderIcon from '@mui/icons-material/Folder';
import EditIcon from '@mui/icons-material/Edit';
import { Button, Card, CardHeader } from '@mui/material';
import { Modal } from 'react-bootstrap'

function generate(element) {
  return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((value) =>
    React.cloneElement(element, {
      key: value,
    }),
  );
}

const Demo = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

export default function AdminToxic() {
  const [open, setOpen] = React.useState(false);
  const handleModal = (e) => {
    setOpen(!open)
  }
  const [category, setCategory] = React.useState("");
  const categories = [
    "True",
    "False",
  ];

  return (
    <Box sx={{ flexGrow: 1, width: 2652 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">

          </Typography>
          <br />
          <br />
          <Demo>
            <List >
              {generate(
                <ListItem
                // secondaryAction={
                //   <IconButton edge="end" aria-label="delete">
                //     <DeleteIcon />
                //   </IconButton>
                // }
                >
                  <ListItemAvatar>
                    <Avatar>
                      <FolderIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="User Name"
                  />

                  <ListItemText
                    primary="User Id"
                  />

                  <ListItemText
                    primary="Date/Time"
                  />
                  <textarea value={"Comment"}></textarea>
                  <IconButton edge="end" aria-label="delete">
                    <EditIcon onClick={(e) => handleModal(e)} />
                  </IconButton>

                </ListItem>,
              )}
            </List>
          </Demo>
        </Grid>
      </Grid>
      <Modal
        size="sml"
        show={open}
        onHide={(e) => handleModal(e)}
        aria-labelledby="example-modal-sizes-title-lg"
        dialogClassName="my-modal"
      >
        <Modal.Header closeButton>
          <Card sx={{ width: 1000, minWidth: 50 }}>
            <CardHeader
              avatar={
                <Avatar aria-label="recipe">
                </Avatar>
              }
              title="User Name"
              subheader="Date/Time"
            />
          </Card>
        </Modal.Header>
        <Modal.Body>
          <div style={{ display: "flex", justifyContent: "left" }}>
            <textarea cols="70" rows="5" style={{padding:"10px", border: "solid 1px blue" }} value={"Comment here to check whther it is toxic or not"}></textarea>
          </div>
          <br />
          <div style={{ display: "flex", justifyContent: "left" }}>
            <p id="footer" >is This Comment Toxic?</p>
            <select required name="submissionType" >
              <option value="" >Choose Category</option>
              {categories.map((cate) => (
                <option key={cate} value={cate}>
                  {cate}
                </option>
              ))}
            </select>
          </div>
          <br/>
          <Button variant="contained">Update</Button>
        </Modal.Body>
      </Modal>
    </Box>
  );
}