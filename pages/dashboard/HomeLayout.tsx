import React, { useState } from 'react'

const HomeLayout = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const createUser = () => {

  }
  return (
    <div>

      <div>
        <input type='emailjh' placeholder={'Email'} value={email} onChange={(e) => setEmail(e.target.value)}  />
        <input type='password' placeholder={'Password'} value={password} onChange={(e) => setPassword(e.target.value)}  />

        <button onClick={createUser}>Sign Up</button>
      </div>
      HomeLayout


    </div>
  )
}

export default HomeLayout