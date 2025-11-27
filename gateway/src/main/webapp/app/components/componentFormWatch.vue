<script setup>
import { ref, watch } from 'vue';

const email = ref('');
const emailError = ref('');

watch(email, newValue => {
  if (!newValue.includes('@')) {
    emailError.value = 'El email debe ser válido';
  } else {
    emailError.value = '';
  }
});
</script>

<template>
  <div>
    <label>Email:</label>
    <input v-model="email" type="email" />
    <p v-if="emailError" class="error">{{ emailError }}</p>
  </div>
</template>

<style scoped>
.error {
  color: orange;
}
</style>
