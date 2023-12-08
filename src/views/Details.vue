<template>
  <div v-if="error">{{ error }}</div>
  <div v-if="post" class="post">
    <h3>{{ post.title }}</h3>
    <p class="pre">{{ post.body }}</p>
    <button @click="handleClick" class="delete">Delete Post</button>
  </div>
  <div v-else>
    <Spinner />
  </div>
</template>

<script setup>
  import getPost from "../composables/gitPost";
  import Spinner from "../components/Spinner.vue";
  import { useRoute, useRouter } from "vue-router";
  import { handleError } from "vue";
  import { projectFirestore } from "../firebase";

  import { collection, deleteDoc, doc } from "firebase/firestore";

  const route = useRoute();
  const router = useRouter();

  const props = defineProps({
    id: String,
  });

  const { post, error, load } = getPost(route.params.id);
  load();

  async function handleClick() {
    const docRef = doc(projectFirestore, "posts", route.params.id);
    await deleteDoc(docRef);
    router.push("/");
  }
</script>

<style scoped>
  .post {
    display: flex;
    align-items: start;
    justify-content: center;
    flex-direction: column;

    max-width: 1200px;
    margin: 0 auto;
  }

  .post p {
    color: #444;
    line-height: 1.5em;
    margin-top: 40px;
  }
  .pre {
    white-space: pre-wrap;
  }
  button.delete {
    margin: 10px auto;
  }
</style>
