import React from 'react'

const header = () => {
  return (
    <div className=' header'>
      <nav class="navbar navbar-expand-lg  container navbar-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#"><img className='header-img' src="https://cdn-icons-png.flaticon.com/128/1177/1177568.png" alt="" /></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a class="header-nav-link nav-link px-2 mx-4" href="#">Home</a>
              <a class="header-nav-link nav-link px-2 mx-4" href="#">Managent</a>
              <a class="header-nav-link nav-link px-2 mx-4" href="#">About</a>
            </div>
          </div>
        </div>
        <div className="header-log">
          <a className='header-nav-link p-2 px-2 text-decoration-none' href="">Login</a>
          <a className='header-nav-link p-2 px-2 ms-4 text-decoration-none' href="">Logout</a>
        </div>
      </nav>
    </div>
  )
}

export default header

