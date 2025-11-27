<script setup>
import { ref, watch } from "vue";

const age = ref(18);

watch(age, (newAge, oldAge) => {
  console.log(`La edad ha cambiado de ${oldAge} a ${newAge}`);
});
</script>

<template>
  <h3>Ejemplo de Watch</h3>  
  <p>Edad: {{ age }}</p>
  <button @click="age++">Cumplir años</button>
</template>

<style scoped>
button {
  margin-top: 8px;
}
</style>