<template>
  <main>
    <div class="preamble">
      <p class="preamble-title">About the dictionary:</p>
      <p>
        Toki Pona is a constructed langauge with a vocabulary of around 120+
        words. In this dictionary, the key meanings of each word is provided.
        The fun thing about Toki Pona is that it's very flexible in its word
        usage, so you can use any word in almost any part of speech!
      </p>
      <p>
        This dictionary is inspired by kala Asi's lipu Linku and lipamanka's
        dictionary. Example sentences are written by me. I will try to use
        example sentences from real-world usage.
      </p>
    </div>

    <div v-for="word in words" :key="word" :id="word.word" class="word-div">
      <span class="word">{{ word.word }}</span>
      <span class="idea-separator"> ·</span>
      <span class="idea">{{ word.idea }}</span>
      <ol>
        <li v-for="sense in word.senses" :key="sense">
          <span class="sense">{{ sense.sense }}</span>
          <span class="pos">{{ sense.pos }}</span>
          <ul v-for="example in sense.examples" :key="example" class="example">
            <li class="sentence">
              {{ example.sentence }}
              <p
                v-for="translation in example.translations"
                :key="translation"
                class="translation"
              >
                {{ translation }}
              </p>
            </li>
          </ul>
        </li>
      </ol>
      <hr />
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
  display: none;
}

.idea-separator {
  display: none;
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
  font-style: italic;
}

.example {
  padding-left: 0.5rem;
  list-style-type: square;
}

.sentence {
  margin: 0;
  color: dimgray;
}

hr {
  border-color: darkgray;
  border-style: dashed;
  border-width: 0.1rem;
}

.translation {
  color: dimgray;
  text-indent: 1rem;
  font-style: italic;
  margin: 0;
}

.preamble-title {
  font-weight: bold;
}

.preamble {
  margin: 1rem 0;
  padding: 1rem;
  border: dimgray 0.1rem dashed;
}
</style>
