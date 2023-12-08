<template>
  <Navbar />
  <RouterView />
  <!-- test -->
</template>
<script setup>
  import { RouterLink, RouterView } from "vue-router";
  import Navbar from "./components/Navbar.vue";
</script>

<style>
  body {
    font-family: Arial, Helvetica, sans-serif;
  }
</style>
