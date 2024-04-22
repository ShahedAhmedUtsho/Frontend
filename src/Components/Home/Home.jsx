import { createContext, useEffect, useState } from "react";
import Form from "../Form/Form";

 export const Context = createContext()
const Home = () => {
const [users,setUsers] =useState([]);


useEffect(() => {
 fetch('http://localhost:3000/users')
 .then(res=>res.json())
 .then(data => setUsers(data))
}, [])
 





const shareContext = {users,setUsers}
    return (
       <Context.Provider value={shareContext}>
        
         <div className="min-h-[100vh] ">
        
<div className="  rounded-sm  md:flex-row flex-col flex gap-3">

<div className="md:w-2/3  rounded-sm  order-1 md:order-2   self-start  grid gap-2   grid-cols-2">
{
users.map((user,index) => <div key={index} className="border-[1px] rounded-sm h-fit  p-3 ">
<h2 className="text-2xl text-gray-400 capitalize mb-2 font-base">  {user.username} </h2>
<h3 className="text-base text-gray-400 mb-1  font-light">Email : {user.email}</h3>
<h3 className="text-base text-gray-400  font-light">City : {user.city}</h3>
</div>)
}

</div>
<div className="md:w-1/3 order-2 md:order-1  rounded-sm ">
<Form></Form>
</div>
</div>





</div>
       </Context.Provider>
    );
};

export default Home;