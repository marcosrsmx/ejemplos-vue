<script setup>
import { ref, computed } from "vue";

const firstName = ref("María");
const lastName = ref("Pérez");

const fullName = computed(() => `${firstName.value} ${lastName.value}`);
</script>

<template>
  <p>Ejemplo de Computed</p>  
  <p>Nombre completo: {{ fullName }}</p>
</template>

<style scoped>
p {
  font-weight: bold;
}
</style>