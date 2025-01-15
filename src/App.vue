<script setup>
import CircumIcon from "@klarr-agency/circum-icons-vue"; 
import axios from "axios"
import {onMounted, ref} from "vue"

const allBooks = ref([])

const fetchAllBooks = async () => {
  const booksResponse = await axios.get("api/books")
  allBooks.value = booksResponse.data
}

onMounted(async () => {
  await fetchAllBooks()
  console.log(allBooks);
})
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
    <label for="search">Look for a Book</label>
    <input type="text" name="search" id="search" class="search">
  </form>
  <!-- Filters Component -->
  <div class="filters"></div>
  <div class="flex-container">
    <div class="books-container">
      <div class="book" v-for="book in allBooks">
        <h3>{{book.title}}</h3>
        <p>{{book.author}}</p>
        <p>{{ book.genre }}</p>
      </div>
      <!-- <div class="book add-btn">
        <div>
          <CircumIcon name="circle_plus"/>
        </div>
      </div> -->
    </div>
  </div>
</template>

<style scoped>
</style>
