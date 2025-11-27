<script setup>
import { ref, watchEffect } from "vue";

const message = ref("Hola");

watchEffect(() => {
  console.log(`El mensaje actual es: ${message.value}`);
});
</script>

<template>
  <h3>Ejemplo de WatchEffect</h3>  
  <input v-model="message" placeholder="Escribe algo" />
</template>

<style scoped>
input {
  padding: 6px;
}
</style>