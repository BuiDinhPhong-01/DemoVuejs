<template>
  <div class="hi">
   <div id="text-center8">
      <div id="text-center8-nav1">
        <h1>OUR PORTFOLIO</h1>
        <hr className="we" />
        <div id="text-center8-contona">
          <a href="">All </a>
          <a href="">Graphic Design </a>
          <a href="">Web Design </a>
          <a href="">Web Development </a>
        </div>
      </div>
      <div id="text-center8-nav2"> 
      <img className="jpg1" src="../assets/work1.jpg"  />
      <img className="jpg1" src="../assets/work2.jpg" />
      <img className="jpg1" src="../assets/work3.jpg" />
      <img className="jpg1" src="../assets/work4.jpg"  />
      <img className="jpg1" src="../assets/work5.jpg" />
      <img className="jpg1" src="../assets/work6.jpg"  />
      <img className="jpg1" src="../assets/work7.jpg"  />
      <img className="jpg1" src="../assets/work8.jpg" /> 
</div>
</div>
 <div id="text-center8-nav3">
        <button id="bth-center8-nav3">Load more</button>
      </div>
</div>


</template>

<script>
export default {

}
</script>

<style>
#text-center8 {
  height: 1000px;
  display: flex;
  justify-content: center;
  flex-direction: column;
}
#text-center8-nav1 {
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
#text-center8-nav1 h1 {
  margin: 15px;
  letter-spacing: 5px;
  font-size: 25px;
  color: rgb(17 17 17);
  font-weight: 500;
  line-height: 1.2;
}
#text-center8-nav1 hr {
  margin: 20px;
}
#text-center8-contona a {
  text-decoration: none;
  margin: 20px;
  font-size: 16px;
  line-height: 2;
  letter-spacing: 1px;
  color: rgb(119, 119, 119);
}
 
#text-center8-nav2 {
  display: flex;
  flex-wrap: wrap;
}
.jpg1  {
  width: 360px;
  height: 360px;
}
</style>