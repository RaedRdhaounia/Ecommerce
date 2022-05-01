import React from 'react'
import { Navigate } from 'react-router-dom'


const Rediration = ({children}) => {
    const token=localStorage.getItem("token")
  return (
    <div>
       {token?<Navigate to={("/home")}/>:children}

    </div>
  )
}

export default Rediration