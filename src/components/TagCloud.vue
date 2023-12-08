<template>
  <div v-if="tags.length" class="tag-cloud">
    <h3>Tags</h3>
    <div v-for="tag in tags" :key="tag">
      <router-link :to="{ name: 'Tag', params: { tag: tag } }"> #{{ tag }} </router-link>
    </div>
  </div>
</template>

<script setup>
  import { computed } from "vue";
  import useTags from "../composables/useTags";

  const props = defineProps({
    posts: Object,
  });
  const tags = useTags(props.posts);
</script>

<style scoped>
  .tag-cloud {
    padding: 10px;
  }
  .tag-cloud h3 {
    border-bottom: 1px solid #eee;
    padding: 16px 8px;
    color: #444;
  }
  .tag-cloud div {
    display: inline-block;
    padding: 10px;
  }
  .tag-cloud div a {
    color: #ccc;
    text-decoration: none;
  }
  .tag-cloud div a.router-link-active {
    color: #ff8800;
    font-weight: bold;
  }
</style>
