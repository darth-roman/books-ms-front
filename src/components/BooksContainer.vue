<script setup>
import CircumIcon from "@klarr-agency/circum-icons-vue"; 
import axios from "axios"
import {onMounted, ref} from "vue"

import Book from '@/components/Book.vue'


const allBooks = ref([])
const showMoreBooks = ref(3)

const booksProps = ref()

const fetchAllBooks = async () => {
  const booksResponse = await axios.get("api/books")
  allBooks.value = booksResponse.data
  return allBooks.value
}

onMounted(async () => {
  await fetchAllBooks()
})
</script>

<template>
    <div class="books-container">
        
      <div class="book" v-for="book in allBooks.slice(0, showMoreBooks)">
        <Book :title="book.title" :author="book.author" :genre="book.genre" />
      </div>

      <CircumIcon name="circle_more" @click="showMoreBooks += 3" color="#e2c652" size="3rem"/>
    </div>
</template>