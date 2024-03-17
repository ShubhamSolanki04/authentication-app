import React from 'react'
import { getAuth } from 'firebase/auth'
import {useNavigate} from 'react-router-dom'


const Home = () => {
  console.log(getAuth());
  const auth = getAuth();
  const navigate = useNavigate()


  const logOut = async()=>{
    await auth.signOut();
    navigate('/')

  }

  return (
    <>
      <div className='container text-center' >
        <h1>Welcome to HomePage...</h1>
        <div className='mt-5'>
          <h1>{auth.currentUser.displayName}</h1>
          <h1>{auth.currentUser.email}</h1>
          <img width={'200'} height={'200'} src={auth.currentUser.photoURL} alt={"noimg"} />
        </div>
        <button onClick={logOut} className='btn btn-danger'>Logout</button>
      </div>
    </>
  )
}

export default Home
