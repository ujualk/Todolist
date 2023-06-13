import React from 'react';
import './App.css';
import { useState} from 'react';

function App() {
 
  const[todos,setTodos]=useState([])
  const[todo,setTodo]=useState('')


  const today=()=>{
    const day=["SUNDAY",'MONDAY','TUESDAY','WEDNESDAY','THURSDAY','FRIDAY','SATURDAY']
    const newDate=new Date()
    const current=day[newDate.getDay()]
    return(current)
   
  
  }
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Woops today is "{today()}"</h2>
      </div>
      <div className="input">
        <input   value={todo} onChange={(e)=>setTodo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
        <i onClick={()=>setTodos([...todos,{id:Date.now(),text:todo,status:false}])} className="fas fa-plus"></i>
      </div>
      
      <div className="todos">
        {
          todos.map((obj)=>{
       return( <div className="todo">
          <div className="left">
            <input onChange={(e)=>{
              setTodos(todos.filter(obj2=>{
                if(obj.id===obj2.id){
                  obj2.status=e.target.checked
                }
                console.log(obj2);
                return obj2
              }))
            }}
              type="checkbox" name="" id="" />
            <p>{obj.text}</p>
          </div>
          <div className="right">
            <i onClick={()=>setTodos(todos.filter((value)=>{
              if(value.id!=obj.id){
                return obj
              }
            }))} className="fas fa-times"></i>
          </div>
        </div>
        )})}
        {
          todos.map((obj)=>{
            console.log(obj.status)
            if(obj.status){
              console.log("pooooe")
              return(<h1 style={{color:'red'}}>{obj.text}</h1>)
            }
            return null
          })
        }
      </div>
    </div>
  );
}

export default App;
