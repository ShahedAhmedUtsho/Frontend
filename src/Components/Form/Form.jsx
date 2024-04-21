
'use client'
import { Envelope, User } from 'phosphor-react'
import { Button, Icon, Input, Label } from 'keep-react'
import { useContext } from 'react'
import { Context } from '../Home/Home'

const Form = () => {
    const {users,setUsers} =useContext(Context);

    const handlePost = e =>{
        e.preventDefault()
        const email= e.target.email.value ;
        const username= e.target.name.value ;
        const city= e.target.city.value ;
        const newUser = {username,email,city}
        
        console.log(newUser) ;
        e.target.reset()
        fetch('http://localhost:3000/users',{
            method:'post',
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify(newUser)
        }).then(res => res.json())
        .then(data => {
           
                
                const newUsers = [...users ,data]
            setUsers(newUsers)
           
        })


    }
  return (
    <form onSubmit={handlePost} className="mx-auto max-w-md space-y-2  rounded-lg border p-8 shadow-md">
        
        <fieldset className="space-y-1">
        <Label htmlFor="name">Name :</Label>
        <div className="relative">
          <Input name='name' required  id="name" placeholder="Enter Name" type="text" className="    ps-11 text-gray-100 bg-gray-700" />
          <Icon>
            <User size={19} color="#AFBACA" />
          </Icon>
        </div>
      </fieldset>



      
      <fieldset className="space-y-1">
        <Label htmlFor="name">Email</Label>
        <div className="relative">
          <Input name='email' required placeholder="Enter email" className="ps-11 bg-gray-700 text-gray-100" />
          <Icon>
            <Envelope size={19} color="#AFBACA" />
          </Icon>
        </div>
      </fieldset>



      <fieldset className="space-y-1">
        <Label htmlFor="name">city:</Label>
        <div className="relative">
          <Input name='city' required  id="city" placeholder="city" type="text" className="ps-11 bg-gray-700 text-gray-100" />
          <Icon>
            <User size={19} color="#AFBACA" />
          </Icon>
        </div>
      </fieldset>
      
      <Button size="sm" color="secondary" type="submit">
        Sign In
      </Button>
    </form>
  )
}


export default Form;