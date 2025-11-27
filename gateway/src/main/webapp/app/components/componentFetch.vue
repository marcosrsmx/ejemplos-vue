<script setup>
import { ref, onMounted } from "vue";

const posts = ref([]);
const isLoading = ref(true);
const error = ref(null);

async function fetchPosts() {
  isLoading.value = true;
  error.value = null;

  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!response.ok) {
      throw new Error("Error al obtener los posts");
    }
    posts.value = await response.json();
  } catch (err) {
    error.value = err.message;
  } finally {
    isLoading.value = false;
  }
}

onMounted(fetchPosts);
</script>

<template>
  <div>
    <p v-if="isLoading">Cargando posts...</p>
    <p v-else-if="error">Error: {{ error }}</p>
    <ul v-else>
      <li v-for="post in posts" :key="post.id">{{ post.title }}</li>
    </ul>
  </div>
</template>