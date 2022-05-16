import { useState } from 'react';
import { toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css'
function App() {
  const [toDos,setTodos]=useState([])
  const [todo,setTodo]=useState('')
  return (
    <div>
      <center>
        <div>  
          <h3>TODO APP</h3>
          <h4>Whoop!! it's {Date().substring(0,3)}day</h4>
          <div className='input'>
          <input value={todo} type="text" onChange={(e)=>{setTodo(e.target.value)}} className="type_box" placeholder="Enter your work...😀✎" />
          {todo===''?null:
          <button onClick={()=>{
            setTodos([...toDos,{id:Date.now(),text:todo,status:false}]);
             toast.success("Task added successfully!");
              }}
               className="add_button">ADD</button>}
          </div>
        </div>
          <h3>TODO</h3>
          <div className='box'>
          {toDos.map((obj)=>{
            return(
              <div>
               {obj.status?null:
               <div className='todo_List'>
               <input  type="checkbox" className='left' onChange={(e)=>{
               setTodos(toDos.filter(obj2=>{
                if(obj2.id===obj.id){
                  obj2.status=e.target.checked
                }
                return obj2
              }))
              console.log(e.target.value,'\n',obj)
            }}/>
            <i>{obj.text}</i>
            <div className='right' onClick={()=>{
             setTodos(toDos.filter(obj2=>{
              if(obj2.id===obj.id){
                obj2=null
              }
              return obj2
            })) 
            }}>❎</div>
            </div>
            }
            </div>
            )
          }
          )}
          </div>
          <h3>DONE</h3>
          <div className='box'>
          {toDos.map((obj)=>{
            return(
              <div>
               {obj.status?
               <div className='todo_List '>
               <input  type="checkbox" checked className='left' onChange={(e)=>{
               setTodos(toDos.filter(obj2=>{
                if(obj2.id===obj.id){
                  obj2.status=e.target.checked
                }
                return obj2
              }))
              console.log(e.target.value,'\n',obj)
            }}/>
            <i>{obj.text}</i>
            <div className='right' onClick={()=>{
             setTodos(toDos.filter(obj2=>{
              if(obj2.id===obj.id){
                obj2=null
              }
              return obj2
            })) 
            }}>❎</div>
            </div>:null
               }
            </div>
            )
          }
          )}
          </div>
      </center>
    </div>
  );
}

export default App;
