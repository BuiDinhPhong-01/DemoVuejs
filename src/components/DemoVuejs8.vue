<template>
   <div class="block bg_white cl_black">
                    <h2>Subscribe To Our Newsletter</h2>
                    <input
                        class="email"
                        type="text"
                        placeholder="Enter your email..."
                    />
                    <button type="submit" class="up_case bg_white subcribe button">
                        subcribe
                    </button>
        </div>
</template>

<script>
export default {

};
</script>

<style>
.block {
  width: 100%;
  height: 250px;
  background-color: rgb(158, 45, 245);
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  letter-spacing: 0.3rem;
  margin-bottom: 3rem;
}
.button {
  height: 50px;
  padding: 15px 50px;
  letter-spacing: 0.1rem;
  border: 3px solid rgb(14, 14, 14);
}
.more button {
  border-color: rgb(14, 14, 14);
}

.more button:hover {
  background-color: rgb(14, 14, 14);
  color: white;
  transition: ease-out 0.5s;
}

.bg_white {
  background-color: white;
}
.cl_black {
  color: rgb(22, 22, 22);
}
input {
  outline: none;
}

.block>h2{
  animation: slide 2s ease-in-out forwards;
}
.email {
  width: 50vw;
  height: 80px;
  border-width: 0px;
  border-bottom: 1px solid rgb(10, 10, 10);
  margin: 30px 0px;
  padding-bottom: 10px;
  text-align: center;
  animation: slide 2s ease-in-out forwards;
}

</style>