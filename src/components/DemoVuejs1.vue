
<template>
    <div id="header">
      <div className="header-content1">
        <a href="#logo"><img className="logo"
            src="https://public-assets.envato-static.com/assets/logos/envato_market-a5ace93f8482e885ae008eb481b9451d379599dfed24868e52b6b2d66f5cf633.svg"
            alt="logo" /></a>
        <button className="btn">Buy now</button>
      </div>
      <div className="header-content2">
        <a href="#logo"
          ><img
            src="https://crucio.riccardoborchi.it/wp-content/uploads/2017/05/logo-1.png"
            alt="logo"
        /></a>
        <div className="navbar-collapse">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#home">HOME</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">ABOUT</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#services">SERVICES</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#team">TEAM</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#portfolio">PORTFOLIO</a>
            </li>
            <li className="nav-item">
          <a className="nav-link"
                href="https://preview.themeforest.net/item/crucio-responsive-one-page-wordpress-theme/full_screen_preview/19973422" >
                BLOG</a >
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">CONTACT</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {};
  </script>
  
  <style>
  #header {
    height: 10rem;
    width: 100%;
    position: fixed;
    z-index: 5;
  }

  .header-content1 {
    padding: 0.5rem 1rem;
    height: 2,5rem;
    display: flex;
    justify-content: space-between;
    background-color: rgb(38, 38, 38);
    margin-top: -8px;
    margin-left: -8px;
  }
  .logo {
    width: 10rem;
    padding: 0.5rem;
  }
  .btn {
    background-color: rgb(122, 169, 60);
    padding: 0rem 1rem;
    border-radius: 5px;
    color: white;
  }
  .btn:hover {
    background-color: #6f9a37;
    transition: 1s;
    cursor: pointer;
  }
  
  .header-content2 {
    background-color: rgb(1, 1, 1);
    height: 5,5rem;
    display: flex;
    justify-content: space-between;
    padding: 1.5rem 3rem;
    opacity: 0.95;
    border-bottom: 3px solid rgb(45, 5, 64);
    margin-left: -8px;
  }
  .header-content2 > .navbar-collapse > .navbar-nav {
    display: flex;
  }
  .header-content2 > .navbar-collapse > .navbar-nav > .nav-item {
    padding: 1rem;
  }
  .header-content2 > .navbar-collapse > .navbar-nav > .nav-item > .nav-link {
    text-decoration: none;
    color: white;
  }
  .header-content2
    > .navbar-collapse
    > .navbar-nav
    > .nav-item
    > .nav-link:hover {
    color: var(--primary-color);
  }
  .header-content2
    > .navbar-collapse
    > .navbar-nav
    > .nav-item
    > .nav-link:focus {
    color: purple;
  }
  .content-arrow {
    width: 3rem;
    height: 3rem;
    text-align: center;
    border: solid var(--primary-color);
    border-width: 0 5px 5px 0;
    margin: 0 auto;
    transform: rotate(45deg);
    margin-top: 6rem;
  }
  </style>
  