import React, { useEffect } from 'react'
import { Fab, LinearProgress } from '@mui/material'
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import { Route, Routes, useNavigate } from 'react-router-dom';
import RequestAdmin from './request/RequestAdmin';
import { useDispatch, useSelector } from 'react-redux';
import { getAllRequest, getAllUsers } from '../../redux/actions';
import UserAdmin from './user/UserAdmin';

function AdminSetting({user}) {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllRequest(user._id))
    
  }, [dispatch]);
  
  const allstate = useSelector(state=>state)
  const navigate=useNavigate()
  const AdminSetting =[
    {name : "Users Setting", color : "black", nav:"UsersSetting", icon:PeopleIcon },
    {name : "Products Settings", color : "green", nav:"ProductsSetting", icon: LayersIcon },
    {name : "Reports", color : "blue", nav:"ReportsSetting", icon: BarChartIcon },
    ]
  return (
    <div style={{display:"flex", flexDirection : "column", alignItems:"center"}}>
     <h1>AdminSetting</h1> 
      <div> 
        <Routes>
        <Route path="" element={AdminSetting.map(set=><Fab
        key={set.nav}
       
                    variant="extended"
                    style={{
                      backgroundColor: "transparent",
                      border: "none",
                      boxShadow: "none",
                    }}
                    onClick={()=>navigate(set.nav)}
                  >
                    <set.icon  />
                    {set.name}
                  </Fab>)}/>
              <Route path="/UsersSetting" element={<UserAdmin user={user}/>}/> 
                  

                  <Route path="/ReportsSetting" element={<RequestAdmin allstate ={allstate}  />}/>
                  </Routes>
        </div>
      
    </div>
  )
}

export default AdminSetting