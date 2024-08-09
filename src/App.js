import React,{useState} from 'react';
import './App.css';

function App() {
  const [newItem,setNewItem] = useState("");
  const [items,setItems] = useState([]);

  function addItem(){

    if(!newItem){
      alert("bos olmas")
    return
    }
    const item ={
      id : Math.floor(Math.random()*100000),
      value : newItem
    }
    setItems (olditems => [...olditems,item])
    setNewItem("");
    
  }

  function deleteItem(id){
    const newArray = items.filter(item => item.id !== id);
    setItems(newArray);
  }
  return (

    <div className="App">
     
      <div className='container'>
        <div className='box'>
        <h1>Todo List app</h1>

<input

type="text"
placeholder="Daxil edin"
value={newItem}
onChange={e=>setNewItem(e.target.value)}

/>

<button onClick={()=>addItem()}>Add</button>

<ul>
 {items.map(item=>{
  return(
    <li key={item.id}>{item.value} <button className='delete' onClick={()=>deleteItem(item.id)}>X</button></li>
  )
 })}
</ul>

        </div>
      
      </div>
     
    </div>
  );
}

export default App;
