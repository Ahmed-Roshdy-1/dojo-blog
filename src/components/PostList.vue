<template>
  <div class="post-list">
    <div class="allPosts" v-for="post in posts" :key="post.id">
      <!-- <h3>{{ post.title }}</h3> -->
      <SinglePost :post="post" />
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, onUpdated, ref } from "vue";
import SinglePost from "./SinglePost.vue";
defineProps({
  posts: Object,
});
</script>

<style scoped></style>
