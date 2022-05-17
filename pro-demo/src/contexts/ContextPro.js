import React, {createContext,useState, useEffect} from "react";
import axios from "axios";
export const ContextPro = createContext()
const initialState = {
    name: '',
    email: '',
    contact: '',
    address: ''
}
const ContextProProvider = ({children}) => {
    const api = 'http://localhost:3000/users'
    const [state, setState] = useState(initialState)
    const [data, setData] = useState([])
    const {name, email, contact, address} = state
    //update
    const [userId, setUserId] = useState(null)
    const [editMode, setEditMode] = useState(false)

    useEffect(() => {
        loadUsers()
    },[])

    // Load user
    const loadUsers = async () => {
        const response = await axios.get(api);
        setData(response.data)
    };
    // handleSubmit
    const handleSubmit = async(e) => {
        e.preventDefault();
        if(!name || !email || !contact || !address) {
            alert('Ban chua nhap thong tin...?')
        } else {
            if(!editMode) {
                await axios.post(api, state)
                setState(initialState);
                setTimeout(() => loadUsers(), 300)
                loadUsers()
            }
            else {
                await axios.put(`${api}/${userId}`, state)
                setState(initialState);
                setTimeout(() => loadUsers(), 300)
                loadUsers()
                setUserId(null)
                setEditMode(false)
            }
        }
    }  
    //   handleChange ()
    const handleChange = (e) => {
        let {name, value} = e.target;
        setState({...state, [name]: value})
    }
    //    handleDelete () 
    const handleDelete = async(id) => {
        if(window.confirm("Are you sure you want to delete?")) {
            axios.delete(`${api}/${id}`)
            setTimeout(() => loadUsers(), 300)
        }
    }
    //    handleEdit ()
    const handleEdit = (id) => {
        const singleUser = data.find(item => item.id == id)
        setState({...singleUser})
        setUserId(id)
        setEditMode(true)
    }
    // contextData  (value of ContextPro)
    const contextData = {
        api,
        data,
        handleChange,
        handleSubmit,
        handleDelete,
        handleEdit,
        state,
        editMode
    }

    return (
        <ContextPro.Provider value={contextData}>
            {children}
        </ContextPro.Provider>
    )
}
export default ContextProProvider