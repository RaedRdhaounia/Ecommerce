import React from 'react'
import Index from "../home/onepirate/Home"

const UserAuth = ({children}) => {
    const token=localStorage.getItem("token")
    return (
        <div>
            {token?children:<Index/>}
        </div>
    )
}

export default UserAuth
