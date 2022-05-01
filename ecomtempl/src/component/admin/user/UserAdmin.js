import { LinearProgress } from '@mui/material';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsers } from '../../../redux/actions';
import CardUsers from './CardUser';

function UserAdmin({user}) {
const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllUsers(user._id))
  }, [dispatch]);
  const LOADINGADMN = useSelector(state=>state.user.LOADINGADMN)
  console.log(LOADINGADMN)
  const Allusers = useSelector(state=>state.user.allusers)
console.log(Allusers)
  return (
    <div>
      Allusers
       <div style={{display :"flex", flexWrap: "wrap", alignItems:"center", paddingLeft:40}}>
         {LOADINGADMN? <LinearProgress/>: Allusers.map(u => <CardUsers r={u} key={u._id} />)}
     </div>
      
      </div>
  )
}

export default UserAdmin