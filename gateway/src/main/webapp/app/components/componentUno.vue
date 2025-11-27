<script setup>
import { ref } from 'vue';
  const nombre  = "Marco";
  const texto = ref('');
</script>
<template>

<h1>Hola {{ nombre }}</h1>
<div>
    <b-form-input v-model="texto" placeholder="Enter your name"></b-form-input>
    <div class="mt-2">Value: {{ texto }}</div>
    <componentDos></componentDos>
    <componentDos></componentDos>
  </div>
</template>
<style>

</style>
