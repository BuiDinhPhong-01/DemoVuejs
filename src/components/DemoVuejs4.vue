<template>
  <div id="main-content3">
      <div class="boxtext">
        <div
          id="text-RESPONSIVE">
          <h1>RESPONSIVE</h1>
          <h2>
            Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod
            tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex
            ea commodi consequat.
          </h2>
        </div>
      </div>
      <div class="boxtext">
        <div
          id="text-CUSTOMIZABLE"
          >
        
          <h1>CUSTOMIZABLE</h1>
          <h2>
            Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod
            tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex
            ea commodi consequat.
          </h2>
        </div>
      </div>
      <div class="boxtext">
        <div id="text-MODERN" >
          <h1>MODERN</h1>
          <h2>
            Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod
            tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex
            ea commodi consequat.
          </h2>
        </div>
      </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
#main-content3 {
  background-color: rgba(255, 255, 255, 1);
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  font-family: "Open Sans",sans-serif;
}
#text-MODERN,
#text-CUSTOMIZABLE,
#text-RESPONSIVE {
  width: 480px;
  height: 250px;
  padding: 80px;
}
.boxtext {
  width: 480px;
  height: 600px;
}
.boxtext h1 {
  font-weight: 500;
  line-height: 1.2;
  color: #fff;
  letter-spacing: 1px;
  font-size: 1.75rem;
  margin-bottom: 20px;
}
.boxtext h2 {
  font-size: 13px;
  color: #fff;
  line-height: 1.5;
  font-weight: 300;
  letter-spacing: 1px;
  width: 355px;
}
#text-RESPONSIVE {
    background-Color : #ad00ff;  
}
#text-CUSTOMIZABLE {
    background-Color: #8200bf;
}
#text-MODERN {
    background-Color :#56007f;
}


</style>