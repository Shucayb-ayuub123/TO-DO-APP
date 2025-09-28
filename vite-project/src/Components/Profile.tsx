import React from 'react'
import  profile  from '../assets/generic-male-avatar-icon-piiktqtfffyzulft.png'
const Profile = () => {
  return (
    <div>

        <div >

        <div>
            <img src={profile} alt="" />
        </div>

        <div>
          <h1>Name : </h1>
          <h1>Email : </h1>
        </div>
        </div>
    </div>
  )
}

export default Profile