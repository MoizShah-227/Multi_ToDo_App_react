import React, { useState } from "react";

function multiInput(){
    const [data,setData]=useState([{fname:"",lname:""}])
   
    const handleClick=()=>{
        setData([...data,{fname:"",lname:""}])
    }
    const handleChange=(e,i)=>{
        const {name,value}=e.target
        const onchangeVal = [...data]
        onchangeVal[i][name]=value
        setData(onchangeVal)
    }
    const handleDelete=(i)=>{
        const deleteVal = [...data]
        deleteVal.splice(i,1)
        setData(deleteVal)
    }
    return(
        <div className="App">
            
            {
                data.map((val,i)=>
                <div>
                    <input name="fname" value={val.fname} onChange={(e)=>handleChange(e,i)} />
                    <button onClick={handleClick}>+</button><button onClick={()=>handleDelete(i)}>-</button>
                </div>
                )
            }
        </div>
    )
}
export default multiInput;