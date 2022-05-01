import React, { useEffect } from "react";
import AddRequest from "./addRequest/AddRequest";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { useDispatch, useSelector } from "react-redux";
import { getCurrentUser, getMyRequest } from "../../redux/actions";
import { LinearProgress } from "@mui/material";
import MyRequest from "./myRequests/MyRequest";


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  border: '2px  #000',
  boxShadow: 24,
  p: 4,
};

function Request({
  user,
  prodList,
  userReducer,
  requestList
} ) {
  
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
  const loadingReq = requestList.loading
  const myRequest = requestList.requests
  return (
    <div className="dep">
      Request
      
      
      <Button variant="contained" disableElevation onClick={handleOpen}><AddCircleOutlineIcon style={{position : "relative"}} className="pos"/></Button>
      <div>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
           <AddRequest/>
        </Box>
      </Modal>
    </div>
  <div>  {loadingReq== true? <LinearProgress color="inherit" />: <MyRequest myRequest={myRequest} id={user._id} />}
    
     
     
    </div>
    
    </div>
  );
}

export default Request;
