<template>
  <header>
    <h1>The Dojo Blog</h1>
    <nav>
      <router-link :to="{ name: 'home' }">Home</router-link>
      <router-link :to="{ name: 'Create' }">Create Post</router-link>
    </nav>
  </header>
</template>

<script setup></script>

<style scoped>
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 10px;
  }
  header h1 {
    color: #ffffff;
    font-size: 45px;
    position: relative;
  }

  h1::before {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    background: #ff8800;
    position: absolute;
    z-index: -1;
    padding-right: 40px;
    left: -30px;
    transform: rotateZ(-0.5deg);
  }

  header a {
    color: #646464;
    text-decoration: none;
    margin-left: 20px;
  }

  header a.router-link-active {
    color: #ff8800;
    font-weight: bold;
  }
</style>
