<template>
  <div id="app">
    <h1>Product Manager</h1>
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}

#app h1 {
  text-align: center;
  margin: 20px 0;
  background: #93adad;
  color: #fff;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.distance {
  padding: 2px;
}
</style>
