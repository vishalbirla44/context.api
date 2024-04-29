import React, {useContext} from 'react'
import Usercontext from '../context/Usercontext'
// import UserContext from '../context/UserContext'


function Profile() {
    const {user} = useContext(Usercontext)
    
    if (!user) return <div>please login</div>

    return <div>Welcome {user.username }and password is {user.password}</div>
}

export default Profile