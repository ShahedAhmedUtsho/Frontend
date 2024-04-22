import { useLoaderData } from "react-router-dom";
import { Trash  } from 'phosphor-react'
import DbForm from "../DBForm/DBform";


const MongoDB = () => {
  const users = useLoaderData()

   const trash = (_id)=>{


    fetch(`http://localhost:3000/dbusers/${_id}`,{
      method:'DELETE'
    }).then(res=>res.json()).then(data=>{
      console.log(data)
      if(data.deletedCount > 0){
        alert('delete Successfully')
      }
    })
    
console.log(_id)
   }
      
       
    return (
        <div>
              <div className="min-h-[100vh] ">
        
        <div className="  rounded-sm  md:flex-row flex-col flex gap-3">
        
        <div className="md:w-2/3  rounded-sm  order-1 md:order-2   self-start  grid gap-2   grid-cols-2">
        {
        users.map((user) => <div key={user._id} className="border-[1px] relative rounded-sm h-fit  p-3 ">
        <h2 className="text-2xl text-gray-400 capitalize mb-2 font-base">  {user.username} </h2>
        <Trash className=" absolute right-4 top-3 " size={22} onClick={()=>trash(user._id)} />
        <h3 className="text-base text-gray-400 mb-1  font-light">Email : {user.email}</h3>
        <h3 className="text-base text-gray-400  font-light">City : {user.city}</h3>
        </div>)
        }
        
        </div>
        <div className="md:w-1/3 order-2 md:order-1  rounded-sm ">
        <DbForm></DbForm>
        </div>
        </div>
        
        
        
        
        
        </div>
            
        </div>
    );
};

export default MongoDB;