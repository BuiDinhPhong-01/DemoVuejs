<template>
  <div className="introduce">
			<div className="introduce-header">TESTIMONIALS</div>
			<div className="introduce-hr"></div>
			<div className="introduce-content">Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</div>
			<div className="introduce-aut">- Morgan F. -</div>
		</div>
</template>

<script>
export default {

}
</script>

<style>
.introduce {
  text-align: center;
  background-color: black;
  color: white;
}

.introduce>.introduce-header {
  padding: 3rem;
  font-size: 32px;
  font-family: "Open Sans",sans-serif;
  letter-spacing: 7px;
}

.introduce>.introduce-hr {
  border-bottom: 5px solid white;
  text-align: center;
  width: 3%;
  margin-left: 48.5%;
}

.introduce>.introduce-content {
  width: 70%;
  margin-left: 15%;
  margin-top: 2rem;
  line-height: 2rem;
  margin-bottom: 1.5rem;
}

.introduce>.introduce-aut {
  font-style: italic;
  padding-bottom: 7rem;
}

</style>