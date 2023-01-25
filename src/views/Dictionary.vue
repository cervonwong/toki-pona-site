<template>
  <main>
    <details>
      <summary>All words</summary>
      <span v-for="word in words" :key="word.word">
        <a :href="'#' + word.word">
          {{ word.word }}
        </a>
        ·
      </span>
    </details>

    <div v-for="word in words" :key="word" :id="word.word" class="word-div">
      <span class="word">{{ word.word }}</span> ·
      <span class="idea">{{ word.idea }}</span>
      <ol>
        <li v-for="sense in word.senses" :key="sense">
          <span class="sense">{{ sense.sense }}</span>
          <span class="pos">{{ sense.pos }}</span>
          <div v-for="example in sense.examples" :key="example" class="example">
            <p class="sentence">
              {{ example.sentence }}
            </p>
            <p
              v-for="translation in example.translations"
              :key="translation"
              class="translation"
            >
              {{ translation }}
            </p>
          </div>
        </li>
      </ol>
    </div>
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

details {
  margin-top: 1rem;
}

.word {
  font-size: 1.32rem;
  font-weight: bold;
}

.idea {
}

ol {
  margin-top: 0;
}

.sense {
  margin-right: 0.5rem;
  font-weight: bold;
}

.pos {
  font-size: 0.8rem;
  color: darkmagenta;
}

.sentence {
  margin: 0;
}

.translation {
  color: gray;
  text-indent: 1rem;
  font-style: italic;
  margin: 0;
}
</style>
