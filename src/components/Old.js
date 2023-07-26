
import React, { useEffect, useState } from 'react'
const Todoform = () => {
    
    const [isEditing, setIsEditing] = useState(true);
    const [editedIndex, setEditedIndex] = useState(null);
    const [inputtext, setInputtext] = useState('');
    const [tasklist, setTasklist] =useState([]);
    const [val,setVal]=useState([]);    
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


        const handleAdd=()=>{
            const abc=[...val,[]]
            setVal(abc)
    
        }
        const handleChange=(onChangeValue,i)=>{
            const inputdata=[...val]
            inputdata[i]=onChangeValue.target.value;
            setVal(inputdata)
           }

           const handleDelete=(i)=>{
               const deletVal=[...val]
               deletVal.splice(i,1)
               setVal(deletVal)
               console.log("The val is: "+val);  
           }
            const Delete=(i)=>{
                const deleteVal = [...myData]
                deleteVal.splice(i,1)
                setMyData(deleteVal)
            }
            const handleButtonClick = (i) => {
                console.log('edit val is:' + i);
                setIsEditing(!isEditing);
                setIsReadonly(!isReadonly);
                setEditedIndex(i);
    };

  return (
      <div className='container ' >
        <h4>Title list</h4>
        <form  className="TodoForm" onSubmit={e=>{
        e.preventDefault();
       
            setMyData([...myData, { title: inputtext, list: tasklist }]);
            
            setInputtext('')
            // setData('')
            console.log(...myData);
            
        }}>



            <input type="text"  value={inputtext} onChange={(e) => setInputtext(e.target.value)}className="todo-input" placeholder='Enter Task Title' />
            <button type='submit' className='mt-3 btn btn-primary add-btn'>ADD</button>
         </form>
     
     <h4 className='mt-2'>Task List </h4>
     <div className="App">
            <>
            <input name='info' placeholder='Enter task'  value={tasklist[val]} onChange={(e)=>{
                        const arr = tasklist;
                        arr[0] = e?.target?.value;
                        setTasklist(arr)
                        } 
                      }/><button className='btn btn-primary' onClick={()=>handleAdd()}>+</button>
                
                {val.map((data,i)=>{
                    return(
                    <div>
                            <input placeholder='Enter task' value={data} onChange={e=>handleChange(e,i)}/>
                            <button className='btn btn-primary' onClick={()=>handleAdd()}>+</button><button className='btn btn-danger' onClick={()=>handleDelete(i)}>-</button>
                            
                    </div>
                    )
                })}
                {/* {JSON.stringify(tasklist)}
                {JSON.stringify(val)}
                 */}
            </>
            
        </div>
       

        
        <div className='list'>
            {myData.map((dat,index) => {
                return (
                    <>
                    <br/>
                    <starice>*</starice> <input  className='showBox  diff' type='text' readOnly={isReadonly || editedIndex !== index}  defaultValue={dat.title} onChange={handleChange}></input>

                    <input  className='showBox  diff2' type='text' readOnly={isReadonly || editedIndex !== index}  defaultValue={tasklist} onChange={handleChange}></input>
                    

                    {
                        val.map((val,i)=><div>
                            <input  className='showBox diff2' type='text' readOnly={isReadonly || editedIndex !== index}  defaultValue={val} onChange={handleChange} ></input><br/>
                            </div>
                        )
                    }
                    
                    <div key={index} className='have mt-3'>
                    <button onClick={()=>handleButtonClick(index)} className='btn btn-primary'> {isEditing ?'Edit' : 'Save'}</button><button className='btn btn-danger'
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