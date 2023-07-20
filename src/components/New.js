import React, { useState } from 'react'

const Todoform = () => {
    let    titleNo =0;
    const [inputtext, setInputtext] = useState('');
    const [formData, setFormData] = useState({
        title: '',
         tasks:[
             {
                 task:'',
                 id: new Date(),
                 isCompleted:false
             }
         ]
     });
       
    
    //MULTIINPUT CODE
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
    
  return (
      <div className='container ' onSubmit={e=>{
        e.preventDefault();
        setFormData({
            ...formData,
            title: inputtext,
            titleNo: titleNo+1
        })
    }}>
        <h4>Title list</h4>
        <form  className="TodoForm">
            <input type="text"  value={inputtext} onChange={(e) => setInputtext(e.target.value)}className="todo-input" placeholder='Enter Task Title' />
            <button type="submit" className='mt-3 btn btn-primary add-btn'>ADD</button>
    
         </form>
     
     <h4 className='mt-2'>Task List </h4>
     <div className="App">
            {
                data.map((val,i)=>
                <div>
                    <input placeholder='Enter task' value={val.fname} onChange={(e)=>handleChange(e,i)} />
                    <button onClick={handleClick} className='btn btn-primary'>+</button><button className='btn-primary btn' onClick={()=>handleDelete(i)}>-</button>
                </div>
                )
            }
        </div>
       

           
        <div className='list'>
        <h4>{formData?.titleNo}{formData?.title}</h4>
        </div>             
     </div>       

);
}

export default Todoform