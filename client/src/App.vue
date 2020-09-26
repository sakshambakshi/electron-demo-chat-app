<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>
<style lang="scss">

*{
  box-sizing: border-box;
}

body{
  margin:0 ;
  padding: 0 ;
  width: 100vw;
  height: 100vh;
}

#app{
  width:100%;
  height: 100%;
}
</style>
