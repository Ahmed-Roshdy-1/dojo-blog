<template>
  <div class="tags">
    <div v-if="errer">{{ errer }}</div>
    <div v-if="filterPosts.length" class="layout">
      <PostList :posts="filterPosts" />
      <TagCloud :posts="posts" />
    </div>
    <div v-else>
      <Spinner />
    </div>
  </div>
</template>

<script setup>
  import { onMounted, computed } from "vue";
  import getPosts from "../composables/getPosts";
  import { useRoute } from "vue-router";
  import PostList from "../components/PostList.vue";
  import Spinner from "../components/Spinner.vue";
  import TagCloud from "../components/TagCloud.vue";

  const { posts, errer, load } = getPosts();
  load();
  const route = useRoute();
  const filterPosts = computed(() => {
    return posts.value.filter((post) => {
      return post.tags.includes(route.params.tag);
    });
  });
</script>

<style scoped>
  .tags {
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
