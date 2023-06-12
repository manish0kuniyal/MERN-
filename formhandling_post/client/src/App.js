
import React, { useState } from 'react'

export const App = () => {
const [name,setName]=useState('')
const [email,setEmail]=useState('')
const [password,setPassword]=useState('')


async function registerUser(event){
  event.preventDefault()

   const response=await fetch('http://localhost:1000/home',{
    method:'POST',
   headers:{
    'Content-Type':'application/json'
   },
   body:JSON.stringify({
     name,
     email,
     password,
   })
   })
  const data=await response.json()
} 




  return (
    <div>
      <form  onSubmit={registerUser}>
        <input
          value={name}
          onChange={(e)=>setName(e.target.value)}
          type='text'
          placeholder='name'
        />
        <br/>
        <br/>
        <input
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          type='text'
          placeholder='email'
        />
        <br/>
        <br/>
        <input
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          type='text'
          placeholder='password'
        />
        <br/>
        <br/>
        <input
          type='submit'
          value='register'
        />
      </form>
    </div>
  )
}

