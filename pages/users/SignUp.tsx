import { createUserWithEmailAndPassword } from 'firebase/auth'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { auth } from '../../config/firebase'


const SignUp = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const router = useRouter()

  const createUser = () => {
    createUserWithEmailAndPassword(auth, email, password)
    .then( () => {
      router.push('/dashboard/HomeLayout')
    }
    ).catch()

  }

  return (

      <div className=''>
        <input type='emailjh' placeholder={'Email'} value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type='password' placeholder={'Password'} value={password} onChange={(e) => setPassword(e.target.value)} />

        <button onClick={createUser}>Sign Up</button>
      </div>
      )
}

      export default SignUp