import React, { useEffect, useState } from 'react'
const Todoform = () => {
    let count=0;
    let msg ="Edit";
    const [isEditing, setIsEditing] = useState(false);
    const [inputtext, setInputtext] = useState('');
    const [print, setPrint] = useState(false);
    const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3']);
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
    const [data,setData]=useState([{}]);
    const [tasklist, setTasklist] =useState([]);
    


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
      };

      console.log(myData)
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
                <input  className='showBox' type='text' value={dat.title} readOnly></input>
                <input className='showBox' type='text' value={dat.list} readOnly></input><br/>
                <button onClick={handleButtonClick} className='btn btn-primary'> {isEditing ? 'Save' : 'Edit'}</button><button className='btn btn-danger'
                onClick={() => Delete(index)}
                >Delete</button>
                </>
            )})}
        </div>             
     </div>       
    
);
}

export default Todoform 