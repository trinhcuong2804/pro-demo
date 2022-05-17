import React, { useContext, useState} from 'react'
import { ContextPro } from '../contexts/ContextPro'
import { Modal, Button  } from 'react-bootstrap'
import Paganation from '../paganation'
import axios from 'axios'
import { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
const ProList = () => {
    const {data,setData, api} = useContext(ContextPro)
    const [view, setView] = useState()
    const [active,setActive] = useState(false)

    const [search, setSearch] = useState('')
    const [name, setName] = useState('')
    // pagination
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage, setPostsPerPage] = useState(5)

    //get of current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;

    // 5 user / 1page
    const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost)
    //Change Page
    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    const {handleDelete} = useContext(ContextPro)
    const {handleEdit} = useContext(ContextPro)


    const handleView = (id) => {
        const view123 = data.find(item => item.id == id)
        setView({...view123})
        setActive(true);
    }

    const handleClose = () => {
        setActive(false)
    }

    // on Search Change
    const handleFilter = (e) => {
        const newName = e.target.value;
        setSearch(newName)
    }
    const onSearch = () => {
        
    }
  return (
    <div className='product-list col-xl-8 col-12'>
        <div className="product-table">
            <div className='product-name fs-4 p-2 pt-4 pb-4'>
                <span className=' border-1 border-bottom pb-2'>
                    User Email Management
                </span>
            </div>
            <div>
                {active && 
                    <Modal  className='modal-view' show={active} onHide={handleClose}>
                    <Modal.Header closeButton>
                    <Modal.Title>Thông tin User: </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <table>
                            <tbody>
                                <tr>
                                    <td>Name:</td>
                                    <td>{view.name}</td>
                                </tr>
                                <tr>
                                    <td>Email:</td>
                                    <td>{view.email}</td>
                                </tr>
                                <tr>
                                    <td>Contact:</td>
                                    <td>{view.contact}</td>
                                </tr>
                                <tr>
                                    <td>Address:</td>
                                    <td>{view.address}</td>
                                </tr>
                        </tbody>
                        </table>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close
                    </Button>
                    </Modal.Footer>
                </Modal>}
            </div>
            <div className=' d-flex justify-content-between my-2'>
                <form className="d-flex">
                    <input 
                        className=" px-2 me-2 border-1 rounded-2" 
                        type="text" 
                        placeholder="Search..." 
                        aria-label="Search"
                        name = "search"
                        onChange={handleFilter}
                        />
                        <button className=' btn btn-search'>
                            <FontAwesomeIcon className=' icon-search' icon={faSearch} />
                        </button>
                </form>
                <div className='total text-end px-2'>Hiện có: {data.length} user</div> 

            </div>
            <table className='table'>
                <thead className="border-1">
                    <tr className='table-row border-1 $teal-200'>
                        <th className='border-1'>No.</th>
                        <th className='border-1'>Name</th>
                        <th className='border-1'>Email</th>
                        <th className='border-1'>Contact</th>
                        <th className='border-1'>Address</th>
                        <th className='border-1'>Action</th>
                    </tr>
                </thead>
                    {/* sua data -> currentPost */}
                {currentPosts.filter((val) => {
                    if (search === "") {
                        return val;
                    } else if (
                        val.name.toLowerCase().includes(search.toLowerCase()) ||
                        val.email.toLowerCase().includes(search.toLowerCase()) ||
                        val.contact.toLowerCase().includes(search.toLowerCase()) ||
                        val.address.toLowerCase().includes(search.toLowerCase()) 
                    ) {
                        return val
                    }
                }).map((item, index) => (                 
                    <tbody key={item.id} className=" border-1">
                    <tr className='border-1border-1'>
                        <td className='border-1'>{index + 1}</td>
                        <td className='border-1'>{item.name}</td>
                        <td className='border-1'>{item.email}</td>
                        <td className='border-1'>{item.contact}</td>
                        <td className='border-1'>{item.address}</td>
                        <td className='border-1'>
                            <div className=''>
                                <button onClick={() =>handleView(item.id)} className='ac-button btn  btn-outline-success mx-1'
                                        data-bs-toggle="modal" data-bs-target="#exampleModal"
                                        >View</button>
                                <button onClick={() =>handleEdit(item.id)} className='ac-button btn  btn-outline-secondary mx-1'>Edit</button>
                                <button onClick={() =>handleDelete(item.id)} className='ac-button btn  btn-outline-danger mx-1'>Delete</button>
                            </div>
                        </td>
                    </tr>
                </tbody>
                ))}
            </table>  
        </div>
        <Paganation postsPerPage={postsPerPage} 
                    totalPosts={data.length}
                    paginate={paginate}>
        </Paganation>   
    </div>
  )
}

export default ProList;
