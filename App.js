import './App.css'
import { MyDay } from './MyDay'
import { useState } from 'react'
import { useEffect } from 'react'
import { getAllDays, addDay, editDay, deleteDay } from './FetchDays'





function App() {

  const [myDay, setDay ] = useState([])
  const [title, setTitle] = useState("")
  const [editing, setEditing ] = useState(false)
  const [dayId, setDayId] = useState("")


  useEffect(() => {
    getAllDays(setDay)
  }, [])

const updatingInInput = (_id, title ) => {
  setEditing(true)
  setTitle(title)
  setDayId(_id)
}

return (
  <div>
    <h1>Day Plan</h1>
    <input
    type = "text"
    placeholder = "my day"
    value = {title}
    onChange = {(e) => setTitle(e.target.value)}
    />
{/* 
    <button onClick={
    {editing ? () => editDay(dayId, title, setDay, setTitle, setediting) : 
      () => addDay(title, setTitle, setDay) } >

    {editing ? "Edit" : "Add"}
    </button> */}

    <button 
    disabled={!title}
    onClick=
    {editing ? () => editDay(dayId, title, setTitle, setDay, setEditing) : 
    () => addDay(title, setTitle, setDay) } >
    {editing ? "Edit" : "Add"}
    </button>

  {/* <MyDay text="WE GOT HERE"/> */}

  {myDay.map((day) => <MyDay text={day.title} key={day._id}
  updatingInInput={() => updatingInInput(day._id, day.title)}
  deleteDay={() => deleteDay(day._id, setDay)}
  />
  )}
  
  </div>
);
}

export default App;
