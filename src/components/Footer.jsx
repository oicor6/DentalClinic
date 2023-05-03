import React from 'react'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <section class=" footer fixed-bottom">
    <nav class="navbar navbar-expand-lg bg-dark">
        <div class="nav2 flex">
          <div class='footer2 flex container-fluid'>
            <p class='copyright'>© 2023 dental clinic</p>
          </div>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a class="nav-link active" aria-current="page" href="#"><img class='logo-networks' src='public\instagram.png'></img></a>
              <a class="nav-link active" aria-current="page" href="#"><img class='logo-networks' src='public\facebook.png'></img></a>
              <a class="nav-link active" aria-current="page" href="#"><img class='logo-networks' src='public\linkedin.png'></img></a>
              <a class="nav-link active" aria-current="page" href="#"><img class='logo-networks' src='public\twitter.png'></img></a>
            </div>
          </div>
        </div>
      </nav>
      </section>
  )}

  export default Footer