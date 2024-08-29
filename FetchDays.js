import axios from 'axios'

const getAllDays = (setDay) => {
    axios.get("https://finaly-node-backend-1.onrender.com")
    .then(({data}) => {console.log(data)
        setDay(data)
    })
}

const addDay = (title, setTitle, setDay) => {
    axios.post(`https://finaly-node-backend-1.onrender.com/saveDays`, { title })
    .then((data) => {
        console.log(data)
        setTitle("")
        getAllDays(setDay)
    })
}


const editDay = (dayId, title, setTitle, setDay, setEditing) => {
    axios.post(`https://finaly-node-backend-1.onrender.com/editDay`, { _id: dayId, title })
    .then((data) => {
        console.log(data)
        setTitle("")
        setEditing(false)
        getAllDays(setDay)
    })
}


const deleteDay = (_id, setDay) => {
    axios.post(`https://finaly-node-backend-1.onrender.com/deleteDay`, { _id })
    .then((data) => {
        console.log(data)
        getAllDays(setDay)
    })
}
export { getAllDays, addDay, editDay, deleteDay }