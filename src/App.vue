<template>
  <div id="nav">
    <router-link to="/">Home</router-link>
    |
    <router-link to="/dict">Dictionary</router-link>
    |
    <router-link to="/about">About</router-link>
    <br />~~~~~~~~~~~~~~~~~~~~~~~~~~~
  </div>
  <router-view />
</template>

<style lang="scss">
#app {
  font-family: Lora, serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#nav {
  padding: 1rem;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: grey;
    }
  }
}
</style>
