<template>
  <div class="started">
                    <div class="started-content">WE CREATE AWESOME PROJECTS</div>
                    <div class="started-button">GET STARTED</div>
                  
                </div>
</template>

<script>
export default {

}
</script>

<style>
.started {
  width: 100%;
  height: 23.5rem;
  background-color: #AD00FF;
  text-align: center;
  color: white;
}

.started>.started-content {
  position: absolute;
  margin-top: 8rem;
  margin-left: 20%;
  width: 60%;
  font-size: 40px;
  font-family: "Open Sans",sans-serif;
  letter-spacing: 7px;
  animation: slide 2s ease-in-out forwards;
}

.started>.started-button {
  position: absolute;
  position: absolute;
  margin-top: 14rem;
  margin-left: 43.5%;
  width: 13%;
  padding: 0.8rem;
  font-size: 16px;
  border: 3px solid white;
  letter-spacing: 2px;
  animation: slide-button 2s ease-in-out forwards;
}

.started>.started-button:hover {
  background-color: white;
  color: #AD00FF;
  transition: 1s ease;
}

</style>