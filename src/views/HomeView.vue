<template>
  <div class="home">
    <h1>Home</h1>
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length" class="layout">
      <PostList :posts="posts" />
      <TagCloud :posts="posts" />
    </div>
    <div v-else><Spinner /></div>
  </div>
</template>

<script setup>
  import PostList from "../components/PostList.vue";
  import getPosts from "../composables/getPosts";
  import Spinner from "../components/Spinner.vue";
  import TagCloud from "../components/TagCloud.vue";

  const { posts, error, load } = getPosts();
  load();
</script>

<style>
  .home {
    max-width: 1600px;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-between;
    padding: 2rem 10rem;
  }
  .layout {
    display: grid;
    grid-template-columns: 3fr 1fr;
    gap: 20px;
  }
</style>
