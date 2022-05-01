import * as React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import SettingsIcon from "@mui/icons-material/Settings";
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import { useNavigate} from 'react-router-dom'

const settings = [
  { name: "profile", icon: ManageAccountsIcon },
  { name: "password", icon: VpnKeyIcon },
  { name: "wallet", icon: AddShoppingCartIcon },
  { name: "log out", icon: MeetingRoomIcon },
];

function SimpleDialog(props) {
  const navigate = useNavigate()
  const fullName = `${props.user.firstName} ${props.user.lastName}`;
  const { onClose, selectedValue, open } = props;
  const handleClose = () => {
    onClose(selectedValue);
  };
 const handleClick=(value)=>{
switch (value) {
  case "log out":
    {localStorage.clear();navigate("/")}
    break;
    case "profile":
    {navigate("/profile");handleClose()}
break;
case "password":
    {navigate("/password");handleClose()}
break;
case "wallet":
    {navigate("/orders");handleClose()}
break;
  default:
    break;
}
  }
  
  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle><Button onClick={()=>navigate("/profile")}>{fullName}</Button> </DialogTitle>
      <List sx={{ pt: 0 }}>
        {settings.map((setting) => (
          <ListItem button key={setting.name} onClick={()=>handleClick(setting.name)}>
            <ListItemText primary={setting.name} />
            <setting.icon style={{ color: "blue" }} />
          </ListItem>
        ))}
      </List>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export default function SimpleDialogDemo({ user }) {
  const userDetails = user.email;
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState("UserName or mail");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <div>
      <Button variant="success" onClick={handleClickOpen}>
      {user.pic  ? <Avatar src={user.pic }></Avatar> :<SettingsIcon/> } 
      </Button>
      {userDetails === undefined ? null : (
        <SimpleDialog
          user={user}
          selectedValue={selectedValue}
          open={open}
          onClose={handleClose}
        />
      )}
    </div>
  );
}
