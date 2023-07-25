import React, { useEffect, useState } from 'react'
const Todoform = () => {
    let count=0;
    const [isEditing, setIsEditing] = useState(false);
    const [inputtext, setInputtext] = useState('');
    const [inputvalue, setInputValue] = useState('');
    const [data,setData]=useState([{}]);
    const [tasklist, setTasklist] =useState([]);
    
    const [isReadonly, setIsReadonly] = useState(true);
    const [formData, setFormData] = useState({
        title: '',
         tasks:[
             {
                 task:'',
                 id: new Date(),
                 isCompleted:false,
            
                 list:'',
                    id :new Date(),
                    isCompleted: false,  
            }
        
         ]
     });
     const [myData, setMyData] = useState([])
       
     
        //MULTIINPUT CODE


    const handleClick=()=>{
        setData([...data,{}]);
       
    }
    
    const handleDelete=(i)=>{
        const deleteVal = [...data]
        deleteVal.splice(i,1)
        setData(deleteVal)
    }
  
    const Delete=(i)=>{
        const deleteVal = [...myData]
        deleteVal.splice(i,1)
        setMyData(deleteVal)
    }
    const handleButtonClick = () => {
        setIsEditing((prevIsEditing) => !prevIsEditing);
        setIsReadonly(prevState => !prevState)
    };
    const handleChange = (event) => {
        setInputValue(event.target.value);
      };
    

  return (
      <div className='container ' >
        <h4>Title list</h4>
        <form  className="TodoForm" onSubmit={e=>{
        e.preventDefault();
            count=1;
       
            setMyData([...myData, { title: inputtext, list: tasklist }]);
            
            setInputtext('')
            setTasklist('')
     
            
                }}>
            <input type="text"  value={inputtext} onChange={(e) => setInputtext(e.target.value)}className="todo-input" placeholder='Enter Task Title' />
            <button type='submit' className='mt-3 btn btn-primary add-btn'>ADD</button>
         </form>
     
     <h4 className='mt-2'>Task List </h4>
     <div className="App">
            {
                <>{
                                        
                data.map((val,i)=>
                <div>
                    <input name='info' placeholder='Enter task'  value={tasklist[val]}  onChange={(e)=> setTasklist(e.target.value)}/>
                    <button onClick={handleClick} className='btn btn-primary'>+</button><button className='btn-primary btn' onClick={()=>handleDelete(i)}>-</button>
                </div>
                )
                
            }
                </>
            }
        </div>
       

        
        <div className='list'>
            {myData.map((dat,index) => {
                return (
                    <>
                    <br/>
                <input  className='showBox' type='text' readOnly={isReadonly}  defaultValue={dat.title} onChange={handleChange}></input>
                <input className='showBox' type='text' readOnly={isReadonly}  defaultValue={dat.list} onChange={handleChange} ></input><br/>
                <div className='have mt-3'>
                <button onClick={handleButtonClick} className='btn btn-primary'> {isEditing ? 'Save' : 'Edit'}</button><button className='btn btn-danger'
                onClick={() => Delete(index)}
                >Delete</button>
                </div>
                </>
            )})}
        </div>  
        
     </div>       
    
);
}

export default Todoform     