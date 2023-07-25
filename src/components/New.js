import React, { useEffect, useState } from 'react'
const Todoform = () => {
    let count=0;
    const arr =[];
    const [isEditing, setIsEditing] = useState(false);
    const [inputtext, setInputtext] = useState('');
    const [inputvalue, setInputValue] = useState('');
    const [data,setData]=useState([""]);
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
        setData([...data,[]]);  
       
    }
    
    const handleDelete=(i)=>{
        console.log(i)
        let info = [...data];
        info.splice(i,1)
        setData(info)
    }   
  
    const Delete=(i)=>{
        const deleteVal = [...myData]
        deleteVal.splice(i,1)
        setMyData(deleteVal)
    }
    const handleButtonClick = (i) => {
           
           if(isEditing==true){
            setIsEditing(false)
        }else{
            setIsEditing(true)
        }

        if(isReadonly==true){
            setIsReadonly(false)
        }else{
            setIsReadonly(true)
        }
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
            console.log(...myData);
            
        }}>



            <input type="text"  value={inputtext} onChange={(e) => setInputtext(e.target.value)}className="todo-input" placeholder='Enter Task Title' />
            <button type='submit' className='mt-3 btn btn-primary add-btn'>ADD</button>
         </form>
     
     <h4 className='mt-2'>Task List </h4>
     <div className="App">
            {
                <ul>                            
                {data.map(( val,index)=>
                    <li key={index}>
                    <input name='info' placeholder='Enter task'  value={tasklist[val]} onChange={(e)=>{
                        const arr = tasklist;
                        arr[index] = e?.target?.value;
                        setTasklist(arr)  
                    } 
                      }/>
                    <button onClick={handleClick} className='btn btn-primary'>+</button><button className='btn-primary btn' onClick={()=>handleDelete(index)}>-</button>
                </li>
                )}
                </ul>
            }
        </div>
       

        
        <div className='list'>
            {myData.map((dat,index) => {
                return (
                    <>
                    <br/>
                <starice>*</starice> <input  className='showBox  diff' type='text' readOnly={isReadonly}  defaultValue={dat.title} onChange={handleChange}></input>
                    
                {
                    dat?.list?.map((val,i)=><div>
                        <input  className='showBox diff2' type='text' readOnly={isReadonly}  defaultValue={val} onChange={handleChange} ></input><br/>
                        </div>
                    )
                }
                
                <div className='have mt-3'>
                <button onClick={()=>handleButtonClick(index)} className='btn btn-primary'> {isEditing ? 'Save' : 'Edit'}</button><button className='btn btn-danger'
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