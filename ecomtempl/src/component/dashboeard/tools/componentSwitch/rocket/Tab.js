import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useSelector } from "react-redux";
import Favourite from "./fav&pay/Favourite"
import Payment from "./fav&pay/Payment"
import { Badge, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';



function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const navigate = useNavigate()
  const favPs = useSelector((state) => state.user.currentUser.favProds);
  const payPs = useSelector((state) => state.user.currentUser.payProds);
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          
          <Tab label="FAV" icon={value===0?<Badge badgeContent={0}><ShoppingCartIcon style={{color:"#2e7d32"}} /></Badge>:null} iconPosition="end" {...a11yProps(0)}  /> 
          <Tab label="PAY" icon={value===1?<Badge badgeContent={0}><PointOfSaleIcon style={{color:"blue"}}/></Badge>:null} iconPosition="end" {...a11yProps(1)} />  
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        
        {favPs? favPs.map(fs=><Favourite fs={fs}/>): null}
      </TabPanel>
      <TabPanel value={value} index={1}>
      {payPs? payPs.map(ps=><Payment ps={ps}/>): null} 
      <Button className="validate" variant="contained" color="success" onClick={()=>navigate("/dashboard/orders")}>validate</Button>
      </TabPanel>
    </Box>
  );
}
