<template>
   <div className="started">
                <div className="discuss-content">WANT TO DISCUSS YOUR NEW PROJECT?</div>
                <div className="started-button">CONTACT US</div>
            </div>
           
</template>

<script>
export default {

}
</script>

<style>
.discuss-content {
  position: absolute;
  margin-top: 8rem;
  margin-left: 23.5%;
  width: 53%;
  font-size: 27px;
  font-family: "Open Sans",sans-serif;
  letter-spacing: 7px;
}
.started {
  width: 100%;
  height: 23.5rem;
  background-color: #9933FF;
  text-align: center;
  color: white;
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
}

.started>.started-button:hover {
  background-color: white;
  color: #9933FF;
  transition: 1s ease;
}
</style>