import React, { useState } from 'react'
import {auth} from '../Firebase'
import {useNavigate} from 'react-router-dom'

import {createUserWithEmailAndPassword} from 'firebase/auth'

const Register = () => {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')

  const navigate = useNavigate()

  const handleSubmit = async (e)=>{
    e.preventDefault();
    try {
        const user = await createUserWithEmailAndPassword(
            auth,email,password
        )
        console.log(user);
        navigate('/')
    } catch (error) {
    console.log(error);
    }
  }

    return (
        <>
            <div className='container ' style={{
                width: '48%'
            }}>
                <h1 className='text-center mt-5'>React firebase authentication</h1>
                <h1 className='text-center mt-3'>Hello New User...😉</h1>
                <div className='container mt-5'>
                    <form onSubmit={handleSubmit}>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Email address</label>
                            <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Password</label>
                            <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" class="form-control" id="exampleInputPassword1" />
                        </div>
                        <div className='text-center' >
                            <button type="submit" style={{ width: '40%' }} class="btn btn-primary">Register</button>
                        </div>
                    </form>

                </div>
                
            </div>


        </>

    )
}

export default Register
