<template>
  <nav>
    <router-link to="/">Home</router-link>
    |
    <router-link to="/dict">Dictionary</router-link>
    |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view />
</template>

<style lang="scss">
#app {
  font-family: Lora, serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

nav {
  border: darkgray 0.1rem;
  border-style: solid;
  padding: 1rem;
  display: inline-block;

  a {
    font-weight: bold;
    color: black;

    &.router-link-exact-active {
      color: darkgray;
    }
  }
}
</style>
