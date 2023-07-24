import React, { useState } from 'react'

const Todoform = () => {
    let contain =[];
    let count=0;
    let    titleNo =0;
    let number=1;
    let array=[1,2,3,4];
    // const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];       
    const [inputtext, setInputtext] = useState('');
    const [print, setPrint] = useState(false);
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
  
    console.log(myData)
  return (
      <div className='container ' >
        <h4>Title list</h4>
        <form  className="TodoForm" onSubmit={e=>{
        e.preventDefault();
            count=1;
        // array.map(()=>setFormData({
            // 
            // ...formData,
            setFormData({
                title: inputtext,
                tasks: tasklist
            })
            
            contain.push(formData)
            setMyData([...myData, contain])
            
            setInputtext('')
            setTasklist('')
            
            // }))
            
            
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
        {/* <h4>{formData?.titleNo}{formData?.title}</h4> */}
            
            {/* {conatin.push(formData.title)}; */}
            {/* {console.log(conatin)} */}
            {/* {number=number+1}; */}
            {/* {console.log(formData.title)} */}
            {/* <h5>{formData?.number}{formData?.list}</h5> */}
            {myData.map((dat,index) => {
                return (
                    <>
                <h2>{index}:{dat[0].title}</h2>
                <p>{index}{dat[0].list}</p>
                <button>edit</button><button>Dlt</button>
                </>
            )})}
        </div>             
     </div>       
    
);
}

export default Todoform 