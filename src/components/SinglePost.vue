<template>
  <div class="post">
    <router-link :to="{ name: 'Details', params: { id: post.id } }">
      <h3>{{ post.title }}</h3>
    </router-link>

    <p>{{ snippet }}</p>
    <div class="tags">
      <span v-for="tag in post.tags" :key="tag">
        <router-link :to="{ name: 'Tag', params: { tag: tag } }"> #{{ tag }} </router-link>
      </span>
    </div>
  </div>
</template>

<script setup>
  import { computed } from "vue";

  const props = defineProps({
    post: Object,
  });

  const snippet = computed(() => {
    return props.post.body.substring(0, 100) + "...";
  });
</script>

<style>
  .post {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: flex-start;
  }
  .post h3 {
    display: inline-block;
    position: relative;
    font-size: 1.8rem;
    color: #fff;
    margin-bottom: 10px;
    max-width: 400px;
  }
  .post h3::before {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    background: #ff8800;
    position: absolute;
    z-index: -1;
    padding-right: 40px;
    left: -30px;
    transform: translateZ(-1deg);
  }

  .tags {
    display: flex;
    gap: 1rem;
  }

  .tags span a {
    color: #6d6d6d;
    text-decoration: none;
    margin-left: 20px;
  }

  .tags span a.router-link-active {
    color: #b4771c;
    font-weight: bold;
  }
</style>
