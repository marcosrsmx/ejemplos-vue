<script setup>
//validacion form manual
import { ref } from 'vue';

const formData = ref({
  name: '',
  email: '',
});

const errors = ref([]);

function validateForm() {
  errors.value = [];

  if (!formData.value.name) {
    errors.value.push('El nombre es obligatorio.');
  }

  if (!formData.value.email.includes('@')) {
    errors.value.push('El email debe ser válido.');
  }
}

function handleSubmit() {
  validateForm();

  if (errors.value.length === 0) {
    console.log('Formulario válido:', formData.value);
  }
}
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <label for="name">Nombre:</label>
    <input id="name" v-model="formData.name" type="text" />

    <label for="email">Email:</label>
    <input id="email" v-model="formData.email" type="email" />

    <ul v-if="errors.length">
      <li v-for="(error, index) in errors" :key="index">{{ error }}</li>
    </ul>

    <button type="submit">Enviar</button>
  </form>
</template>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
input,
button {
  padding: 8px;
}
ul {
  color: red;
  margin: 0;
  padding: 0;
  list-style: none;
}
</style>
