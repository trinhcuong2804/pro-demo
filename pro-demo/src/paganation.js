import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const Paganation = ({postsPerPage, totalPosts, paginate}) => {
    const pageNumbers = []

    for(let i=1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }
    
  return (
    <nav className=' d-flex justify-content-center'>
        <ul className='pagination'>
            <li className=' page-item'>
                <a className=' page-link' href="">
                    <FontAwesomeIcon icon={faChevronLeft}/>
                </a>
            </li>
            {pageNumbers.map( number => ( 
                <li key={number} className="page-item">
                    <a onClick={() => paginate(number)} href="!#" className='page-link'>
                        {number}
                    </a>
                </li>
            ))}
            <li className=' page-item'>
                <a className=' page-link' href="">
                    <FontAwesomeIcon icon={faChevronRight}/>
                </a>
            </li>
        </ul>
    </nav>
  )
}

export default Paganation
