<template>
  <main>
    <dl>
      <div v-for="word in words" :key="word">
        <dt>{{ word.word }}</dt>
        <dd>{{ word.idea }}</dd>
      </div>
    </dl>
  </main>
</template>

<script>
import dictionary from "../assets/dictionary.json";

export default {
  name: "Dictionary",
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  data() {
    return {
      words: dictionary.words,
    };
  },
};
</script>

<style lang="scss" scoped>
main {
  padding: 0 1rem 0 1rem;
}

dt {
  font-weight: bold;
}

dd {
  font-style: italic;
}
</style>
