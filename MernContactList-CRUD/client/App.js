import React, { useEffect, useState } from 'react'
import Axios from "axios"
export const App = () => {
const [data,setData]=useState([
])
const[name,setName]=useState('')
const[msg,setMsg]=useState('')
const[updatename,setUpdateName]=useState('')
const[finduser,setfinduser]=useState('')
const[updatemessage,setUpdateMessage]=useState('')

useEffect(()=>{

    Axios.get("http://localhost:1001/home")
    .then((response)=>
    {setData(response.data)})
    .catch((err)=>console.log(err))
    
},[])


const CreateNew=()=>{

    Axios.post("http://localhost:1001/home/post",{
        name,
        msg
    }).then((response)=>{
        alert('New User Created')
    })
}

const UpdateUser=()=>{
      Axios.put(`http://localhost:1001/home/${finduser}`,{
        name:updatename,
        msg:updatemessage
      }).then((response)=>{
        alert('userUpdated')
      })
      .catch((err)=>console.log(err))
}


const deleteUser=()=>{

     Axios.delete(`http://localhost:1001/home/${finduser}`)
     .then((response)=>{
        alert('userDeleted')
     })
     .catch((err)=>console.log(err))
}

  return (<div>


<div>
        <h2>CREATE USER</h2>
    <br/>
        <input type='text' placeholder='name....'
        onChange={(event)=>{
            setName(event.target.value)
        }}
        />
        <br/><br/>
        <input type='text' placeholder='message....'
        onChange={(event)=>{
            setMsg(event.target.value)
        }}
        />
        <br/><br/>
        <button onClick={CreateNew}>Create User</button>
    </div>

<h1>=============</h1>
    <div>
        <h2>UPDATE USER</h2>
    <br/>
    
    <input type='text' placeholder=' user-name....'
        onChange={(event)=>{setfinduser(event.target.value)}}
        />
        <br/><br/>
        <input type='text' placeholder='update name....'
        onChange={(event)=>{setUpdateName(event.target.value)}}
        />
        <br/><br/>
        <input type='text' placeholder='update msg....'
        onChange={(event)=>{setUpdateMessage(event.target.value)}}
        />
        <br/><br/>
        <button onClick={UpdateUser}>UpdateUser</button>
    </div>
    <h1>=============</h1>
       
       <div>
        <h2>DELETE USER</h2>
            
            <input type='text' placeholder='user-name...'
             onChange={(event)=>{setfinduser(event.target.value)}}
            /><br/><br/>
           <button onClick={deleteUser}>DELETE USER</button>

       </div>


    <div>{
        data.map((value)=>{
          return(
            <div >
            <div style={{border:'2px solid grey',margin:"15px",width:'250px'}}>
               <h3>name:{value.name}</h3>
               <h3>message:{value.msg}</h3>
            </div>
            </div>
          )
        })
        }
    </div>





    </div>
  )
}
