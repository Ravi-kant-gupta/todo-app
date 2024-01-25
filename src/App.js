import { useState } from 'react';
import uuid from 'react-uuid';
import './App.css';

function App() {
  const [inputValue,setinputValue] = useState("")
  const [selectValue,setselectValue] = useState("Low Priority")
  const [itemList,setitemList] = useState([])

  const addToDo=()=>{
    const newItem ={
      id : uuid(),
      name : inputValue,
      category : selectValue
    }
    console.log(newItem)
    setitemList([...itemList,newItem])
  }
  const deleteFunction=(id)=>{
    const newList = itemList.filter((item)=> item.id !== id)
    setitemList(newList)
  }

  return (
    <div className='bg-container'>
      <h1>Priority To-Do List</h1>
      <div className='field-container'>
        <input className='input-field' type='text' value={inputValue} onChange={(event)=>setinputValue(event.target.value)}/>
        <select className='select-field' onChange={(event)=> setselectValue(event.target.value)}>
          <option>Low Priority </option>
          <option>Medium Priority </option>
          <option>High Priority </option>
        </select>
        <button className='btn' onClick={()=>addToDo()}>Add</button>
      </div>

      <div className='list-container'>
        <ul>
          <li>Low Priority</li>
          {itemList.map((item)=>{
            return item.category === "Low Priority" && <li key={item.id} className='add-list'> {item.name} <button className='delete-btn' onClick={()=>deleteFunction(item.id)}>Delete</button></li>
          })}
        </ul>
        <ul>
          <li>Medium Priority</li>
          {itemList.map((item)=>{
            return item.category === "Medium Priority" && <li key={item.id} className='add-list'> {item.name} <button className='delete-btn' onClick={()=>deleteFunction(item.id)}>Delete</button></li>
          })}
        </ul>
        <ul>
          <li>High Priority</li>
          {itemList.map((item)=>{
            return item.category === "High Priority" && <li key={item.id} className='add-list'> {item.name} <button className='delete-btn' onClick={()=>deleteFunction(item.id)}>Delete</button></li>
          })}
        </ul>
      </div>

    </div>
  );
}

export default App;
