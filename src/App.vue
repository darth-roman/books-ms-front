<script setup>
import Navbar from '@/components/Navbar.vue'
import BooksContainer from '@/components/BooksContainer.vue'

</script>

<template>
  
  <Navbar />
  <!-- Filters Component -->
  <div class="filters"></div>
  <div class="flex-container">
    <h2>Welcome to my library</h2>
    <BooksContainer />
  </div>
</template>

<style scoped>
</style>
