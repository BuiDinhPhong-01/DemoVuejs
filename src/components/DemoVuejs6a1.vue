<template>
    <div id="team" className="text-center6">
        <h1>OUR TEAM</h1>
        <hr className="we" />
        <div id="text-center6-img">
         <img className="jpg" src="../assets/team1.jpg"  />
         <img className="jpg" src="../assets/team2.jpg" />
         <img className="jpg" src="../assets/team3.jpg"  />
      </div>
      </div>
    
  </template>
  
  <script>
  export default {
  
  }
  </script>
  
  <style>
  .text-center6 {
    height: 700px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .text-center6 h1 {
    letter-spacing: 5px;
    font-size: 2rem;
    font-weight: 500;
    line-height: 1.2;
    margin-bottom: 30px;
  }
  .text-center6-img {
    width: 300px;
    height: 400px;
    display: flex;
    justify-content: center;
    margin: 30px 20px 20px 20px;
  }
  
  .jpg {
      margin: 20px;
      width: 300px;
      height: 400px;
      object-fit: cover;
    }
    
     
  </style>