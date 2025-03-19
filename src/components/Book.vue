<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    title: String,
    author: String,
    genre: String
})
</script>

<template>
    <h3>{{title}}</h3>
    <p>{{author}}</p>
    <p>{{ genre }}</p>
</template>