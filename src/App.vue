<script setup>
</script>

<template>
  <!-- nav component -->
  <nav>
    <ul>
      <li>
        <a href="#">Home</a>
      </li>
      <li>
        <a href="#">Books</a>
      </li>
      <li>
        <a href="#">About</a>
      </li>
    </ul>    
  </nav>

  <!-- Form Component -->
  <form>
    <label for="search">
      Look for a Book
      <input type="text" name="search" id="search" class="search">
    </label>
  </form>
  <!-- Filters Component -->
  <div class="filters"></div>

</template>

<style scoped>
</style>
