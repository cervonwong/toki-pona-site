<template>
  <main class="home">
    <h1>toki!</h1>
    <p>o lukin e ni:</p>
    <router-link to="/dict">Dictionary</router-link>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Home",
});
</script>

<style lang="scss" scoped>
main {
  padding: 0 1rem 0 1rem;
}
</style>
