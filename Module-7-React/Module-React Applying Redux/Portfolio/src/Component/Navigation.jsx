import React from 'react'

function Navigation() {
  return (
    <>
      <section class="navigation">
        <div class="nav">
          <div class="logo-section">
            <h2 id="logo">ArvindK</h2>
          </div>
          <ul class="nav-list">
            <a href="#" ><li>Home</li></a>
            <a href="#" ><li>About</li></a>
            <a href="#" ><li>Skills</li></a>
            <a href="#" ><li>Projects</li></a>
            <a href="#" ><li>Contact</li></a>

          </ul>
          <div class="nav-humbar">
            <i class="fa-solid fa-bars"></i>
          </div>
        </div>
      </section>
    </>
  )
}

export default Navigation
