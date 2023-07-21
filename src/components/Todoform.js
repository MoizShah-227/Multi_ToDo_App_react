import React, { useState } from 'react'

const Todoform = () => {
    let    titleNo =0;
    let number=1;
    const array=[];       
    const [inputtext, setInputtext] = useState('');
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
  return (
      <div className='container ' onSubmit={e=>{
        e.preventDefault();
        setFormData({
            ...formData,
            title: inputtext,
            titleNo: titleNo+1,
            list:tasklist,
            number:number+1
                    
        })
        setTasklist(' ')
        setInputtext(' ')
        array.push(tasklist);
        console.log(array[0]);
    }}>
        <h4>Title list</h4>
        <form  className="TodoForm">
            <input type="text"  value={inputtext} onChange={(e) => setInputtext(e.target.value)}className="todo-input" placeholder='Enter Task Title' />
            <button type="submit" className='mt-3 btn btn-primary add-btn'>ADD</button>
         </form>
     
     <h4 className='mt-2'>Task List </h4>
     <div className="App">
            {
                <>{
                data.map((val,i)=>
                <div>
                    <input placeholder='Enter task'  value={tasklist[val]}  onChange={(e)=> setTasklist(e.target.value)}/>
                    <button onClick={handleClick} className='btn btn-primary'>+</button><button className='btn-primary btn' onClick={()=>handleDelete(i)}>-</button>
                </div>
                )
        
            }
                </>
            }
        </div>
       

        
        <div className='list'>
        <h4>{formData?.titleNo}{formData?.title}</h4>
            <h5>{formData?.number}{formData?.list}</h5>
            </div>             
     </div>       
    
);
}

export default Todoform