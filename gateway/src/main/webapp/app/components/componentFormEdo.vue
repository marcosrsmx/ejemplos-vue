<script setup>
import { ref, computed } from "vue";

const formData = ref({
  name: "",
  email: "",
});

const isFormValid = computed(() => {
  return formData.value.name && formData.value.email.includes("@");
});

function handleSubmit() {
  console.log("Formulario enviado:", formData.value);
}
</script>

<template>
  <h3>Ejemplo de Form Validation con estado (desactiva envio si no es correcto)</h3>  
  <form @submit.prevent="handleSubmit">
    <label for="name">Nombre:</label>
    <input id="name" v-model="formData.name" type="text" />

    <label for="email">Email:</label>
    <input id="email" v-model="formData.email" type="email" />

    <button type="submit" :disabled="!isFormValid">Enviar</button>
  </form>
</template>

<style scoped>
button:disabled {
  background-color: lightgray;
  cursor: not-allowed;
}
</style>