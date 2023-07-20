import React, { useState } from 'react'

const Todoform = () => {
    let    titleNo =0;
    const [inputtext, setInputtext] = useState('');
    const [print,setPrint] =useState(false);    
    const showData = (e) => {
         e.preventDefault();        
        console.log("Value: "+inputtext);
        // <h1>value is:{inputtext}</h1>
        
    };

    
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
      <div className='container '>
        <h1>{inputtext}</h1>
        <h4>Title list</h4>
        <form  className="TodoForm">
            <input type="text" onSubmit={showData} value={inputtext} onChange={(e) => setInputtext(e.target.value)}className="todo-input" placeholder='Enter Task Title' />
        
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
        {/* <button type="submit" onClick={()=>setPrint(true)} className='mt-3 btn btn-primary add-btn'>ADD</button> */}

        <button type="submit" onClick={(e)=>showData(e)} className='mt-3 btn btn-primary add-btn'>ADD</button>
            <div className='showContent pt-3'>
            {
                print?
                <h3>{titleNo}:{inputtext}</h3>:
                null
                
            }
            </div>
            
     </div>       

);
}

export default Todoform
