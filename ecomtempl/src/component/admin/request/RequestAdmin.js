import React from 'react'
import CardRequest from './CardRequest'

function RequestAdmin({allstate}) {
 
  const allrequest = allstate.request.allrequest
  const Adminid = allstate.user.currentUser._id
   console.log(allrequest)
  return (
    <div>
      
       <div style={{display :"flex", flexWrap: "wrap", alignItems:"center", paddingLeft:40}}>
      {allstate.request.loading? null :allrequest==[] ?"no request yet" : allrequest.map(r=> <CardRequest key={r._id} r={r} Adminid={Adminid} />) }
     </div>
      
      </div>
  )
}

export default RequestAdmin