import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getCurrentUser } from '../../redux/actions';

function AdminAuth({children}) {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getCurrentUser());
    }, []);
    const load = useSelector((state) => state.user.loading);
    const user = useSelector((state) => state.user.currentUser);

  return (
    <div>
        {load? "wait few of moments to check AdminAuth ....": user.role=="admin"? children: <Navigate  to="/dashboard" />}
    </div>
  )
}

export default AdminAuth