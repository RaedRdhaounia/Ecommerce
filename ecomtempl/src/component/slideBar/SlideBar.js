import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import { useNavigate } from 'react-router-dom';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';

export const MainListItems =() => {
  const MainList =[
    {name : "Dashboard", color : "black", nav:"home", icon:DashboardIcon },
    {name : "products", color : "green", nav:"products", icon: ShoppingCartIcon },
    {name : "Customers", color : "blue", nav:"Customers", icon: PeopleIcon },
    {name : "Reports", color : "red", nav:"request", icon: ReportGmailerrorredIcon },
    {name : "Integrations", color : "brown", nav:"Integrations", icon: LayersIcon},]
 const navigate  = useNavigate()
  return (
  <React.Fragment>
    {MainList.map(el=><ListItemButton key={el.name} value="orders" onClick={()=>navigate(`${el.nav}`)}>
      <ListItemIcon >
        <el.icon style={{color : el.color}}/>
      </ListItemIcon>
      <ListItemText primary={el.name} style={{color : el.color}}  />
    </ListItemButton>)}
    
  
    
   
  </React.Fragment>
  )
};

export const SecondaryListItems =()=> {
  const secondaryList =[
    {name : "Admin Settings", color : "gray", nav:"", icon: ManageAccountsIcon },
    {name : "Users Setting", color : "blue", nav:"/UsersSetting", icon:SupervisedUserCircleIcon },
    {name : "Products Settings", color : "green", nav:"/ProductsSetting", icon: ProductionQuantityLimitsIcon },
    {name : "Reports", color : "red", nav:"/ReportsSetting", icon: ReportProblemIcon },
    ]
    const navigate  = useNavigate()
  return (
    <React.Fragment>
          <ListSubheader component="div" inset>
</ListSubheader>
    {secondaryList.map(el=><ListItemButton key={el.name}  value="orders" onClick={()=>navigate(`admin${el.nav}`)}>
      <ListItemIcon >
        <el.icon style={{color : el.color}}/>
      </ListItemIcon>
      <ListItemText primary={el.name} style={{color : el.color}}  />
    </ListItemButton>)}
  </React.Fragment>
  )
};